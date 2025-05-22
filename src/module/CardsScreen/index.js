import { Module } from "asab_webui_components";

import { CardsScreen } from "./CardsScreen";

export default class CardsScreenApplicationModule extends Module {
    constructor(app, name) {
        super(app, "CardsScreenApplicationModule");

        app.Router.addRoute({
            path: "/detail/:id",
            end: false,
            name: 'Cards Screen',
            component: CardsScreen,
        });
    }
}