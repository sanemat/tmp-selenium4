import "chromedriver";
import { Builder, By, until } from "selenium-webdriver";
import { Options } from "selenium-webdriver/chrome.js";
const options = new Options();
// options.addArguments("--no-sandbox");

let driver;

try {
  driver = await new Builder()
    .forBrowser("chrome")
    .usingServer("http://selenium-hub:4444/wd/hub")
    .setChromeOptions(options)
    .build();
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
