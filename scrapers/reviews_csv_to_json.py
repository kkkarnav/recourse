import json
import pandas as pd
from pprint import pprint


def grab_data():

    with open("D:\\code\\recourse\\api\\src\\courses.json", "r", encoding="utf8") as f:
        courses = json.load(f)

    with open("D:\\code\\scripts\\reviews_spring.csv", "r") as f:
        reviews = pd.read_csv(f)
        reviews = (
            reviews.drop("ip", axis=1)
                .drop("user_agent", axis=1)
                .drop("referrer", axis=1)
        )

    return courses["data"], reviews


# helper function to return a set of unique course codes from a course name, prof name, and semester combination
def get_course_code(name, prof, semester):
    codes = []
    for course in reversed(courses):
        if course["semester"] == semester:
            if course["name"] == name:
                if prof in course["faculty"]["professors"][0]["name"]:
                    codes.append(course["code"][0])
    return codes


if __name__ == "__main__":

    courses, new_reviews = grab_data()

    # convert the csv reviews into json objs and add the verified and code criteria
    spring_reviews = [
        {
            "timestamp": timestamp,
            "code": get_course_code(course_name, prof, "Spring 2022"),
            "semester": "Spring 2022",
            "prof": prof,
            "ratings": {
                "engaging": v1,
                "interesting_material": v2,
                "grading": v3,
                "workload": v4,
                "attendance": v5,
                "TFs": v6,
                "holistic": v7,
            },
            "review": "" if "float" in str(type(review)) else review,
            "verified": "str" in str(type(email)) and "ashoka.edu.in" in email,
        }
        for timestamp, course_name, prof, v1, v2, v3, v4, v5, v6, v7, email, review in zip(
            new_reviews["created_at"],
            new_reviews["course"],
            new_reviews["prof"],
            new_reviews["1"],
            new_reviews["2"],
            new_reviews["3"],
            new_reviews["4"],
            new_reviews["5"],
            new_reviews["6"],
            new_reviews["7"],
            new_reviews["email"],
            new_reviews["feedback"],
        )
    ]

    with open("reviews.json", "w") as file:
        json.dump({"data": spring_reviews}, file)
