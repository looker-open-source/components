/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

const licenseTextFull = require('./licenseTextFull');
const licenseTextSPDX = require('./licenseTextSPDX');

const regexCopyright =
  /Copyright \(c\) [\d]{4} (Looker Data Sciences, Inc\.|Google LLC)/;
const regexSpdx = /SPDX-License-Identifier: MIT/;
const regexLicenseFullText = /Permission is hereby granted/;

// Use shortened SPDX License identifier when there are fewer than
// 100 lines of code. Otherwise render full license text.
// See guidelines at go/releasing/preparing#license-headers
const LINE_COUNT_THRESHOLD = 100;

/**
 * Select correct license text variant and detect appropriate error
 * codes based on the contents of the header comments and total lines
 * in the source code.
 * @param resources relevant content needed to derive lint rules
 * @param resources.headerComments An array of comment nodes appearing before executable code
 * @param resources.sourceLineCount The total lines of source code (including header comments)
 * @returns an array of lint errors, the correct license header, and the existing license header (when relevant)
 */

function deriveLintErrorCode({ headerComments, sourceLineCount }) {
  const copyrightHeaderNode = headerComments.find((comment = { value: '' }) =>
    regexCopyright.test(comment.value)
  );

  const licenseHeaderSpdxNode = headerComments.find((comment = { value: '' }) =>
    regexSpdx.test(comment.value)
  );

  const licenseHeaderFullNode = headerComments.find((comment = { value: '' }) =>
    regexLicenseFullText.test(comment.value)
  );

  const lintErrors = [];

  if (!copyrightHeaderNode) {
    lintErrors.push('copyright');
  }

  if (!licenseHeaderSpdxNode && !licenseHeaderFullNode) {
    lintErrors.push('spdxOrLicense');
  }

  if (licenseHeaderSpdxNode && sourceLineCount > LINE_COUNT_THRESHOLD) {
    lintErrors.push('longSrc');
  } else if (licenseHeaderFullNode && sourceLineCount <= LINE_COUNT_THRESHOLD) {
    lintErrors.push('shortSrc');
  }

  return {
    lintErrors,
    currentLicenseHeaderNode:
      copyrightHeaderNode || licenseHeaderSpdxNode || licenseHeaderFullNode,
    draftLicenseHeader:
      sourceLineCount > LINE_COUNT_THRESHOLD
        ? licenseTextFull
        : licenseTextSPDX,
  };
}

module.exports = deriveLintErrorCode;
