import { eyelashLiftingGallery, eyebrowGallery,extensionGallery,facialGallery } from "./Galleries";
import{eyelashLiftingServicesDetails,eyebrowServicesDetails,eyelashExtensionServicesDetails, facialTreatmentServicesDetails} from "./ServicesDetails.js";
import { lashLiftingDescriptions, eyebrowDescriptions, eyelashExtensionDescriptions, facialsDescriptions} from './ServicesDescriptions';

export const services =[
    {
        serviceName:"Przedłużanie rzęs",
        servicePhoto:extensionGallery,
        serviceExcerpt:"Zabiegi przedłużania rzęs metodą 1:1, 2D oraz 3D ...",
        serviceDescription1:`remove this`,
        serviceDescription:eyelashExtensionDescriptions,
        sericesDetails:eyelashExtensionServicesDetails,
        servicePrice:"150 zł",
        duration:"2h",
        id:"przedluzanie_rzes",

    },
    {
        serviceName:"Zabiegi na twarz i makijaż",
        servicePhoto:facialGallery,
        serviceExcerpt:"Cofnij czas, dzięki zabiegom odmładzającym i regenerującym...",
        serviceDescription1:`remove this`,
        serviceDescription:facialsDescriptions,
        sericesDetails:facialTreatmentServicesDetails,
        servicePrice:"150 zł",
        duration:"2h",
        id:"zabiegi_twarz",

    },
    {
        serviceName:"Stylizacja brwi",
        servicePhoto:eyebrowGallery,
        serviceExcerpt:"Zabiegi laminacji, henny, regulacji...",
        serviceDescription1:`remove this `,
        serviceDescription:eyebrowDescriptions,
        sericesDetails:eyebrowServicesDetails,
        servicePrice:"150 zł",
        duration:"2h",
        id:"stylizacja_brwi",

    },
    {
        serviceName:"Lifting rzęs",
        servicePhoto:eyelashLiftingGallery,
        serviceExcerpt:`Lifting rzęs to zabieg podniesienia i podkręcenia rzęs, który daje trwały, naturalny efekt...`,
        serviceDescription1:`remove this.`,
        serviceDescription:lashLiftingDescriptions,
        sericesDetails:eyelashLiftingServicesDetails,
        servicePrice:"150 zł",
        duration:"2h",
        id:"lifting_rzes",
    },





];