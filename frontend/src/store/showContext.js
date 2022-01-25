import React from "react";

const ShowContext = React.createContext({
    basketIsShow: false,
    onOpen: () => {},
    onClose: () => {},
    nameBasket: "",
    onChangeName: (name) => {},
})

export default ShowContext;