import { CharacterStatus } from "../services/home";
import colors from "./colors";

export const getStatusColor = (status: CharacterStatus): string => {
    switch (status) {
        case CharacterStatus.Alive:
            return colors.green;
        case CharacterStatus.Dead:
            return colors.red;
        case CharacterStatus.Unknown:
            return colors.gray;
            
        default:
            return colors.black;
    }
};
