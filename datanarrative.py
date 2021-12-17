import csv
from smart_open import open
import pandas as pd
import numpy as np

import pprint


def load_data(file):
    with open(file, newline="", encoding="utf8") as file:
        data = csv.reader(file, delimiter=",", quotechar='"')
        dataset = [row for row in data]

    return dataset


def clean_data(dataset):

    for row in dataset:

        # cover for edgecases where data is non-uniform
        if "Arpita".casefold() in row[1].casefold():
            row[1] = "Arpita Das"

        if "Rashmi".casefold() in row[1].casefold():
            row[1] = "Rashmi Muraleedhar"

        if "Bapat".casefold() in row[1].casefold():
            row[1] = "Ravindra Bapat"

        if (
            "Sidharth".casefold() in row[1].casefold()
            or "Siddharth".casefold() in row[1].casefold()
        ):
            row[1] = "Sidharth Singh"

    # convert to dataframe
    dataframe = pd.DataFrame(
        dataset[1:],
        columns=[
            "timestamp",
            "prof",
            "engaging",
            "interesting_material",
            "grading",
            "workload",
            "attendance",
            "TFs",
            "holistic",
            "review",
            "email",
        ],
    )

    return dataframe


def create_table(dataframe):

    # empty matrix with prof name as index
    data = [[0 for x in range(10)] for y in range(36)]
    for index, row in enumerate(data):
        row[0] = sorted(list(set(dataframe["prof"])))[index]

    prof_ratings = pd.DataFrame(
        data,
        columns=[
            "prof",
            "sample_size",
            "engaging",
            "interesting_material",
            "grading",
            "workload",
            "attendance",
            "TFs",
            "holistic",
            "compound_score",
        ],
    ).astype(
        {
            # use floats for the aggregate ratings
            "engaging": np.float64,
            "interesting_material": np.float64,
            "grading": np.float64,
            "workload": np.float64,
            "attendance": np.float64,
            "TFs": np.float64,
            "holistic": np.float64,
            "compound_score": np.float64,
        }
    )

    # set prof name as index

    return prof_ratings


def populate_table(prof_ratings, dataset):

    for index, prof in enumerate(prof_ratings["prof"]):

        prof_ratings.at[index, prof_ratings.columns[1]] = len(
            [row for row in dataset if prof in row[1]]
        )
        all_ratings = []
        for i in range(3, 10):
            ratings = [
                int(row[i - 1]) if row[i - 1] else 0
                for row in dataset
                if prof in row[1]
            ]
            average_rating = round(float(sum(ratings) / len(ratings)), 2)
            all_ratings.append(average_rating)
            prof_ratings.at[index, prof_ratings.columns[i - 1]] = average_rating

        # calculate compound score
        compound = round(
            (
                (
                    2 * all_ratings[0]
                    + 1 * all_ratings[1]
                    + 0.8 * all_ratings[2]
                    + 1.2 * all_ratings[3]
                    + 0.8 * all_ratings[4]
                    + 0.4 * all_ratings[5]
                    + 4 * all_ratings[6]
                )
                / 51
            )
            * 5,
            2,
        )
        prof_ratings.at[index, prof_ratings.columns[9]] = compound

    # print(prof_ratings[["prof", "workload"]].sort_values(by=["workload"], ascending=False))

    return prof_ratings.query("sample_size >= 1").sort_values(
        by=["compound_score"], ascending=False
    )


def science_metric(prof_ratings):
    science = [
        "Gautam Menon",
        "Alok Bhattacharya & Shashidhara",
        "Sourav Pal",
        "Gaurav Bhatnagar",
        "Mihir Bhattacharya",
        "Maya Saran",
        "Debayan Gupta",
        "Ravindra Bapat",
        "Kumarjit Saha",
        "Krishna Maddaly",
    ]
    humanities = [
        "Dhruv Raina & LS Shashidhara",
        "Navanjot Lahiri",
        "Rudy Mukherjee",
        "Jonathan Gil Harris",
        "Joost Burgers",
        "Saikat Majumdar",
        "Rudy & Gopalkrishna Gandhi",
        "Dimitry Shevchenko",
        "Madhavi Menon",
    ]

    prof_ratings = prof_ratings.set_index("prof")


if __name__ == "__main__":

    file_data = load_data("reviews.csv")
    cleaned_dataframe = clean_data(file_data)

    table = create_table(cleaned_dataframe)
    table = populate_table(table, file_data)

    science_metric(table)

    # pprint.pprint(table)
    print(table.to_html())
