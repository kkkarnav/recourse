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


def create_matrix(dataframe):
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

    # prof_ratings = prof_ratings.set_index('prof')

    return prof_ratings


def populate_matrix(prof_ratings, dataset):

    # for each unique prof
    for index, prof in enumerate(prof_ratings["prof"]):

        # generate filtered dataframe of only entries for that prof
        prof_reviews = dataset[dataset.prof == prof]

        # assign the number of individual reviews to sample_size
        prof_ratings.at[index, "sample_size"] = len(prof_reviews)

        # for each of the ratings columns
        for column_index in range(3, 10):

            # get every individual rating for that rating metric
            all_ratings_for_metric = [
                int(rating) if rating else 2.5
                for rating in prof_reviews.iloc[:, column_index - 1]
            ]

            # generate average rating for that rating metric
            average_rating_for_metric = round(
                float(sum(all_ratings_for_metric) / len(all_ratings_for_metric)), 2
            )

            # assign it to that prof and metric cell
            prof_ratings.at[
                index, prof_ratings.columns[column_index - 1]
            ] = average_rating_for_metric

        # generate compound score and tack on
        compound = round(
            (
                (
                    2 * prof_ratings.at[index, "engaging"]
                    + 1 * prof_ratings.at[index, "interesting_material"]
                    + 0.8 * prof_ratings.at[index, "grading"]
                    + 1.2 * prof_ratings.at[index, "workload"]
                    + 0.8 * prof_ratings.at[index, "attendance"]
                    + 0.4 * prof_ratings.at[index, "TFs"]
                    + 4 * prof_ratings.at[index, "holistic"]
                )
                / 51
            )
            * 5,
            2,
        )
        prof_ratings.at[index, "compound_score"] = compound

    # return the matrix after filtering by sample size
    min_sample_size = 1
    return prof_ratings.query("sample_size >= " + str(min_sample_size)).sort_values(
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


if __name__ == "__main__":

    file_data = load_data("reviews.csv")
    cleaned_dataframe = clean_data(file_data)

    matrix = create_matrix(cleaned_dataframe)
    matrix = populate_matrix(matrix, cleaned_dataframe)

    # science_metric(matrix)

    # print(matrix.to_html())
