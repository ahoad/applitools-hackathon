import "./commands";

import "@applitools/eyes-cypress/commands";

import { configure } from "@testing-library/cypress";
configure({ testIdAttribute: "id" });
