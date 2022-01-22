# library imports
import requests
import random


class Scraper:
    def __init__(self):
        # define the headers to use
        self.headers = [
            {
                "User-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/605.1.15 "
                "(KHTML, like Gecko) Version/13.1.1 Safari/605.1.15"
            },
            {
                "User-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:77.0) Gecko/20100101 Firefox/77.0"
            },
            {
                "User-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 "
                "(KHTML, like Gecko) Chrome/83.0.4103.97 Safari/537.36"
            },
            {
                "User-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:77.0) Gecko/20100101 Firefox/77.0"
            },
            {
                "User-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
                "(KHTML, like Gecko) Chrome/83.0.4103.97 Safari/537.36"
            },
        ]

    def scrape(self, url, **parameters):
        # grab the webpage with requests
        header = self.headers[random.randrange(0, 5)]
        web_response = requests.get(url, headers=header, params=parameters)

        # and return it
        return web_response
