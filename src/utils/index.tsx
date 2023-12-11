import { Status } from "../interfaces/character";

import colors from "./colors";

export const getStatusColor = (status: Status): string => {
    switch (status) {
        case Status.alive:
            return colors.green;
        case Status.dead:
            return colors.red;
        case Status.unknown:
            return colors.gray;

        default:
            return colors.black;
    }
};
