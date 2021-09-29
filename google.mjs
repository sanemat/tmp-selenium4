import "chromedriver";
import { Builder, By, until } from "selenium-webdriver";

let driver;

try {
  driver = await new Builder().forBrowser("chrome").build();
  await driver.get("https://google.com/");
  await driver.wait(
    until.elementLocated(By.xpath("//img[contains(@alt,'Google')]")),
    5000
  );
} finally {
  if (driver) {
    await driver.quit();
  }
}
