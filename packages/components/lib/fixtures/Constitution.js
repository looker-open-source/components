let _ = t => t,
    _t;

import React from 'react';
import styled from 'styled-components';
import { Heading, Paragraph } from '../';
export const constitutionShort = 'We the People of the United States, in Order to form a more perfect Union, establish Justice, insure domestic Tranquility, provide for the common defense, promote the general Welfare, and secure the Blessings of Liberty to ourselves and our Posterity, do ordain and establish this Constitution for the United States of America.';
export const ConstitutionShort = ({
  fontSize
}) => React.createElement(Paragraph, {
  fontSize: fontSize
}, constitutionShort);
export const Constitution = () => React.createElement(Format, null, React.createElement(Heading, {
  as: "h2"
}, "Preamble"), React.createElement(ConstitutionShort, null), React.createElement(Heading, {
  as: "h2"
}, "Article 1 "), React.createElement(Heading, {
  as: "h3"
}, "Section 1 "), React.createElement(Paragraph, null, "All legislative Powers herein granted shall be vested in a Congress of the United States, which shall consist of a Senate and House of Representatives."), React.createElement(Paragraph, null, "The House of Representatives shall be composed of Members chosen every second Year by the People of the several States, and the Electors in each State shall have the Qualifications requisite for Electors of the most numerous Branch of the State Legislature."), React.createElement(Paragraph, null, "No Person shall be a Representative who shall not have attained to the Age of twenty five Years, and been seven Years a Citizen of the United States, and who shall not, when elected, be an Inhabitant of that State in which he shall be chosen."), React.createElement(Paragraph, null, "Representatives and direct Taxes shall be apportioned among the several States which may be included within this Union, according to their respective Numbers, which shall be determined by adding to the whole Number of free Persons, including those bound to Service for a Term of Years, and excluding Indians not taxed, three fifths of all other Persons. The actual Enumeration shall be made within three Years after the first Meeting of the Congress of the United States, and within every subsequent Term of ten Years, in such Manner as they shall by Law direct. The Number of Representatives shall not exceed one for every thirty Thousand, but each State shall have at Least one Representative; and until such enumeration shall be made, the State of New Hampshire shall be entitled to chuse three, Massachusetts eight, Rhode-Island and Providence Plantations one, Connecticut five, New-York six, New Jersey four, Pennsylvania eight, Delaware one, Maryland six, Virginia ten, North Carolina five, South Carolina five, and Georgia three."), React.createElement(Paragraph, null, "When vacancies happen in the Representation from any State, the Executive Authority thereof shall issue Writs of Election to fill such Vacancies."), React.createElement(Paragraph, null, "The House of Representatives shall chuse their Speaker and other Officers; and shall have the sole Power of Impeachment."));
const Format = styled.article.withConfig({
  displayName: "Constitution__Format",
  componentId: "sc-1ewjd00-0"
})(_t || (_t = _`
  ${0} {
    font-weight: ${0};
    margin-bottom: ${0};
  }

  ${0} {
    margin: ${0} 0;
  }
`), Heading, ({
  theme
}) => theme.fontWeights.semiBold, ({
  theme
}) => theme.space.u3, Paragraph, ({
  theme
}) => theme.space.u3);
//# sourceMappingURL=Constitution.js.map