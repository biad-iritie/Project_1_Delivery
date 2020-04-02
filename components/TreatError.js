/* eslint-disable prettier/prettier */
import ConstApp from '../constants/ConstApp';

export default function treatError(error) {
    //console.log(error)
    const message = error.message ? error.message : error;
    //console.log("treatError");
    //console.log(`timeout of {TIMEOUT_SERVER}ms exceeded`);
    switch (message) {
        case `timeout of ${ConstApp.TIMEOUT_SERVER}ms exceeded`:
            return {
                titleError: 'Désolé !',
                error:
                    'SVP verifiez votre connexion internet ou re-essayez votre action plus tard',
            };
        case 'Request failed with status code 404':
            return {
                titleError: 'Désolé !',
                error:
                    "Raison d'un probleme technique, SVP re-essayez votre action plus tard",
            };

        default:
            return {
                titleError: 'Désolé !',
                error: message,
            };
        //break;
    }
}
