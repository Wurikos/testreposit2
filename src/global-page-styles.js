import React from "react";
import { transformVar } from "@quarkly/atomize";
import { createGlobalStyle } from "styled-components";

const pageStyles = {
    "404": {},
    "index": {},
    "index1": {},
    "index1/index11": {},
    "index1/index111": {},
    "index1/index1111": {},
    "index12": {},
    "page2": {},
    "page2/page2-1": {},
    "page2/page2-2": {},
    "page2/page2-3": {},
    "page2/page2-3/page2-4": {},
    "page2/page2-3/page2-41": {},
    "page2/page2-3/page2-411": {}
};

const PageStyles = createGlobalStyle`
    body {
        ${({ styles }) =>
            Object.entries(styles || {}).map(
                ([prop, value]) => `${prop}: ${transformVar(prop, value)};`
            )}
    }
`;
export const GlobalQuarklyPageStyles = ({ pageUrl }) => <PageStyles styles={pageStyles[pageUrl]} />
