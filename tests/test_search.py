from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.keys import Keys

def test_search_existing_book():
    driver = webdriver.Edge()

    try:
        driver.get("http://localhost:3000/library")

        search = WebDriverWait(driver, 10).until(
            EC.element_to_be_clickable((By.ID, "book-search"))
        )

        search.send_keys("hob")

        WebDriverWait(driver, 10).until(
            lambda d: "Hobbit" in d.find_element(By.ID, "book-cards").text
            and "Dune" not in d.find_element(By.ID, "book-cards").text
        )

        cards = driver.find_element(By.ID, "book-cards").text

        assert "Hobbit" in cards
        assert "Dune" not in cards

    finally:
        driver.quit()

def test_search_nonexistent_book():
    driver = webdriver.Edge()

    try:
        driver.get("http://localhost:3000/library")

        search = WebDriverWait(driver, 10).until(
            EC.element_to_be_clickable((By.ID, "book-search"))
        )

        search.send_keys("xyz123")

        WebDriverWait(driver, 10).until(
            EC.text_to_be_present_in_element(
                (By.ID, "book-cards"), "No books found."
            )
        )

        cards = driver.find_element(By.ID, "book-cards").text

        assert "No books found." in cards
        assert "Hobbit" not in cards
        assert "Dune" not in cards

    finally:
        driver.quit()

def test_empty_search_shows_all_books():
    driver = webdriver.Edge()

    try:
        driver.get("http://localhost:3000/library")

        search = WebDriverWait(driver, 10).until(
            EC.element_to_be_clickable((By.ID, "book-search"))
        )

        search.send_keys("hob")

        WebDriverWait(driver, 10).until(
            lambda d: "Hobbit" in d.find_element(By.ID, "book-cards").text
            and "Dune" not in d.find_element(By.ID, "book-cards").text
        )

        search.send_keys(Keys.CONTROL, "a")
        search.send_keys(Keys.BACKSPACE)

        WebDriverWait(driver, 10).until(
            lambda d: "Hobbit" in d.find_element(By.ID, "book-cards").text
            and "Dune" in d.find_element(By.ID, "book-cards").text
        )

        assert search.get_attribute("value") == ""

    finally:
        driver.quit()


def test_search_author_with_spaces_and_mixed_case():
    driver = webdriver.Edge()

    try:
        driver.get("http://localhost:3000/library")

        search = WebDriverWait(driver, 10).until(
            EC.element_to_be_clickable((By.ID, "book-search"))
        )

        search.send_keys("  hErBeRt  ")

        WebDriverWait(driver, 10).until(
            lambda d: "Dune" in d.find_element(By.ID, "book-cards").text
            and "Hobbit" not in d.find_element(By.ID, "book-cards").text
        )

    finally:
        driver.quit()