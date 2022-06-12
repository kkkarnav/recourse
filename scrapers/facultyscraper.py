import json
from pprint import pprint
import re

from web_scraper import Scraper


subjects = {
    "Computer Science": "CS",
    "Politic": "POL",
    "Economic": "ECO",
    "Physics": "PHY",
    "History": "HIS",
    "Visual": "VA",
    "Chemisty": "CHM",
    "Writing": "CW",
    "Math": "MAT",
    "Philosoph": "PHI",
    "Media Studies": "MS",
    "Biology": "BIO",
    "International Relation": "IR",
    "Sociology": "SOA",
    "Entrepreneur": "ENT",
    "Environment": "ES",
    "Psych": "PSY",
    "English": "ENG",
    "Performing": "PA",
}


def clean_html_artifacts(string):
    artifacts = [
        "\\t",
        "\\n",
        "<br> ",
        "<br>",
        "\\xc2",
        "\\xa0",
        "\\xc3",
        "\\xa9",
        "\\xe2",
        "\\x80",
        "\\x99",
    ]
    for element in artifacts:
        string = string.replace(element, "")
    string = string.replace(",  ", ", ").replace("\\'", "'").strip(".").strip()
    return string


def string_between(string, start, stop):
    return clean_html_artifacts((string.split(start)[1]).split(stop)[0])


def grab_html_table(scraper, url):
    html_response = scraper.scrape(url)
    html_content = str(html_response.content)
    html_table = string_between(
        html_content,
        '<div class="ashoka-wraper" id="faculty_data"',
        '<i class="fa fa-arrow',
    )
    return html_table


def get_raw_data(scraper, base_url, filter_url):
    html_tables = []
    for page_index in range(1, 22):
        page_url = base_url.strip("?") + "/page/" + str(page_index) + "/?" + filter_url
        html_table = grab_html_table(scraper, page_url)
        html_tables.append(html_table)
    return html_tables


def process_faculty_html(html_tables):
    prof_objects = []
    for html_table in html_tables:
        prof_html_entries = html_table.split(
            'class="col-xl-3 col-lg-4 col-md-6 col-12 d-flex">'
        )[1:]
        for prof_html_entry in prof_html_entries:
            prof_object = {}
            prof_object["link"] = string_between(
                prof_html_entry,
                'faculty_card_item_inner"><a href="',
                '"><div class="card_profile"',
            )
            prof_object["image"] = string_between(
                prof_html_entry, '<img src="', '" alt="" />'
            )
            prof_object["name"] = string_between(
                prof_html_entry, '<div class="card_info"><h4>', "</h4><p>"
            )
            prof_object["position"] = string_between(
                prof_html_entry, "</h4><p>", "</p><small>"
            )
            prof_object["qualification"] = string_between(
                prof_html_entry, "</p><small>", "</small>"
            )
            if "mailto:" in prof_html_entry:
                prof_object["email"] = string_between(
                    prof_html_entry,
                    '</small><a href="mailto:',
                    '"><img src="https://www.ashoka.edu.in/wp-content/themes/ashoka/images/mail-icon.png',
                )
            for department in subjects.keys():
                if department in prof_object["position"]:
                    prof_object["department"] = subjects[department]
                    break

            if prof_object["name"] == "Kathleen Harbin":
                prof_object["name"] = "Rachel Kathleen Harbin"

            prof_objects.append(prof_object)

    return prof_objects


def grab_uwp(url_link):
    html_response = scraper_object.scrape(url_link)
    html_content = str(html_response.content)
    page_ids = re.findall(
        '(?<=https://www.ashoka.edu.in/profile/)(.*?)(?=/")', html_content
    )
    page_images = re.findall(
        '(?<=<img src="https://www.ashoka.edu.in/wp-content/uploads/)(.*?)(?=" alt="">)',
        html_content,
    )
    page_links = ["https://www.ashoka.edu.in/profile/" + x for x in page_ids]
    page_images = [
        "https://www.ashoka.edu.in/wp-content/uploads/" + x for x in page_images
    ]

    json_objects = []
    for i in range(len(page_ids)):
        json_object = {}
        json_object["profile_link"] = page_links[i]
        json_object["profile_image"] = page_images[i]
        json_object["name"] = "".join(
            [
                x[0].upper() + x[1:]
                for x in [
                    x + " "
                    for x in page_ids[i].strip().strip("/").replace("-", " ").split(" ")
                ]
            ]
        ).strip()
        json_object["email"] = (
            page_ids[i].strip().strip("/").replace("-", ".") + "@ashoka.edu.in"
        )
        json_object["department"] = "CW"
        if i == 4:
            json_object["email"] = "jasleen.bagga@ashoka.edu.in"

        if i == 0 or i == 1:
            json_object[
                "position"
            ] = "Assistant Professor of Academic Writing, Ashoka University"
        elif i == 2:
            json_object[
                "position"
            ] = "Visiting Faculty of Creative Writing, Senior Writing Fellow, Undergraduate Writing Programme"
        elif i == 3:
            json_object["position"] = "Senior Writing Fellow"
        else:
            json_object["position"] = "Writing Fellow"

        json_objects.append(json_object)

    return json_objects


def scrape_data():
    scraper_object = Scraper()
    base_link = "https://www.ashoka.edu.in/roles/faculty/?"
    additional_link = "yearby=all"

    html_strings = get_raw_data(scraper_object, base_link, additional_link)
    professors = process_faculty_html(html_strings)
    professors += grab_uwp("https://www.ashoka.edu.in/uwp-team/")
    pprint(professors)
    with open("faculty.json", "w") as file:
        json.dump({"data": professors}, file)


if __name__ == "__main__":

    with open("faculty.json", "r") as file:
        current_data = json.load(file)["data"]

    with open("D:\\code\\recourse\\api\\src\\faculty.json", "r") as file:
        old_data = json.load(file)["data"]

    for old_prof in old_data:
        if old_prof["name"] not in [prof["name"] for prof in current_data] and "Harbin" not in old_prof["name"]:
            current_data.append(old_prof)

    for index, prof in enumerate(current_data):
        if "email" not in prof or prof["email"] == "" or prof["email"] != prof["email"].lower():
            prof["email"] = (prof["name"].split(" ")[0] + "." + prof["name"].split(" ")[1] + "@ashoka.edu.in").lower()
            current_data[index] = prof

    with open("faculty.json", "w") as file:
        json.dump({"data": current_data}, file)
