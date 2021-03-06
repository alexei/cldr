"use strict";

{
  const assert = chai.assert;

  describe("cldrGui.test.getBodyHtml", function () {
    const html = cldrGui.test.getBodyHtml();

    it("should not return null or empty", function () {
      assert(html != null && html !== "", "html is neither null nor empty");
    });

    const xml = "<body>" + html + "</body>";
    const xmlStr = cldrTest.parseAsMimeType(xml, "application/xml");
    it("should return valid xml when in body element", function () {
      assert(xmlStr || false, "parses OK as xml when in body element");
    });

    const htmlStr = cldrTest.parseAsMimeType(html, "text/html");
    it("should return good html", function () {
      assert(htmlStr || false, "parses OK as html");
    });

    it("should contain angle brackets", function () {
      assert(
        htmlStr.indexOf("<") !== -1 && htmlStr.indexOf(">") !== -1,
        "does contain angle brackets"
      );
    });
  });
}
