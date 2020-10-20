import React from "react";

const ColorContext = React.createContext();

const ColorProvider = ColorContext.Provider;
const ColorConsumer = ColorContext.Consumer;

export { ColorProvider, ColorConsumer };
