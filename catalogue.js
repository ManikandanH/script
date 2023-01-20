import fetch from "node-fetch";
import {
  PRODUCTS_IN_CATALOGUE_GRAPHQL,
  PRODUCTS_GRAPHQL,
} from "./graphql-queries/index.js";
import { writeFile } from "fs/promises";

const productIds = [
  {
    id: "a1f25000003BcEYAA0",
  },
  {
    id: "a1f25000003Bct5AAC",
  },
  {
    id: "a1f25000003Brb4AAC",
  },
  {
    id: "a1f25000003Brc3AAC",
  },
  {
    id: "a1f25000003Brd4AAC",
  },
  {
    id: "a1f25000003Brd6AAC",
  },
  {
    id: "a1f25000003BrdiAAC",
  },
  {
    id: "a1f25000003BreXAAS",
  },
  {
    id: "a1f25000003BreYAAS",
  },
  {
    id: "a1f25000003BrfpAAC",
  },
  {
    id: "a1f25000003Brh7AAC",
  },
  {
    id: "a1f25000003Brh8AAC",
  },
  {
    id: "a1f25000003Brk0AAC",
  },
  {
    id: "a1f25000003Brk1AAC",
  },
  {
    id: "a1f25000003Brk2AAC",
  },
  {
    id: "a1f25000003BrnlAAC",
  },
  {
    id: "a1f25000003Brr8AAC",
  },
  {
    id: "a1f25000003Brr9AAC",
  },
  {
    id: "a1f25000003BrriAAC",
  },
  {
    id: "a1f25000003BrrjAAC",
  },
  {
    id: "a1f25000003BrrkAAC",
  },
  {
    id: "a1f25000003BrtIAAS",
  },
  {
    id: "a1f25000003BrtOAAS",
  },
  {
    id: "a1f25000003BrttAAC",
  },
  {
    id: "a1f25000003BrtuAAC",
  },
  {
    id: "a1f25000003BrvjAAC",
  },
  {
    id: "a1f25000003BrvkAAC",
  },
  {
    id: "a1f25000003BrvnAAC",
  },
  {
    id: "a1f25000003BrvpAAC",
  },
  {
    id: "a1f25000003BrvqAAC",
  },
  {
    id: "a1f25000003BrvsAAC",
  },
  {
    id: "a1f25000003BrvtAAC",
  },
  {
    id: "a1f25000003Brw4AAC",
  },
  {
    id: "a1f25000003Brw5AAC",
  },
  {
    id: "a1f25000003Brw7AAC",
  },
  {
    id: "a1f25000003Brw8AAC",
  },
  {
    id: "a1f25000003BrwGAAS",
  },
  {
    id: "a1f25000003BrwIAAS",
  },
  {
    id: "a1f25000003BrwJAAS",
  },
  {
    id: "a1f25000003BrwLAAS",
  },
  {
    id: "a1f25000003BrwMAAS",
  },
  {
    id: "a1f25000003BrwNAAS",
  },
  {
    id: "a1f25000003BrwqAAC",
  },
  {
    id: "a1f25000003BrwrAAC",
  },
  {
    id: "a1f25000003BrwTAAS",
  },
  {
    id: "a1f25000003BrwUAAS",
  },
  {
    id: "a1f25000003BrwVAAS",
  },
  {
    id: "a1f25000003BrwWAAS",
  },
  {
    id: "a1f25000003BrwXAAS",
  },
  {
    id: "a1f25000003BrwyAAC",
  },
  {
    id: "a1f25000003Brx1AAC",
  },
  {
    id: "a1f25000003BrxeAAC",
  },
  {
    id: "a1f25000003BrxfAAC",
  },
  {
    id: "a1f25000003BrxhAAC",
  },
  {
    id: "a1f25000003BrxIAAS",
  },
  {
    id: "a1f25000003BrxSAAS",
  },
  {
    id: "a1f25000003BrxvAAC",
  },
  {
    id: "a1f25000003BrxVAAS",
  },
  {
    id: "a1f25000003BrxxAAC",
  },
  {
    id: "a1f25000003Bry2AAC",
  },
  {
    id: "a1f25000003Bry3AAC",
  },
  {
    id: "a1f25000003Bry5AAC",
  },
  {
    id: "a1f25000003Bry7AAC",
  },
  {
    id: "a1f25000003Bry8AAC",
  },
  {
    id: "a1f25000003Bry9AAC",
  },
  {
    id: "a1f25000003BryFAAS",
  },
  {
    id: "a1f25000003BryGAAS",
  },
  {
    id: "a1f25000003BryHAAS",
  },
  {
    id: "a1f25000003BryJAAS",
  },
  {
    id: "a1f25000003Brz0AAC",
  },
  {
    id: "a1f25000003Brz2AAC",
  },
  {
    id: "a1f25000003Brz3AAC",
  },
  {
    id: "a1f25000003Brz4AAC",
  },
  {
    id: "a1f25000003Brz5AAC",
  },
  {
    id: "a1f25000003Brz6AAC",
  },
  {
    id: "a1f25000003Brz8AAC",
  },
  {
    id: "a1f25000003BrzAAAS",
  },
  {
    id: "a1f25000003BrzBAAS",
  },
  {
    id: "a1f25000003BrzCAAS",
  },
  {
    id: "a1f25000003BrzOAAS",
  },
  {
    id: "a1f25000003BrzRAAS",
  },
  {
    id: "a1f25000003BrzSAAS",
  },
  {
    id: "a1f25000003BrzTAAS",
  },
  {
    id: "a1f25000003BrzVAAS",
  },
  {
    id: "a1f25000003BrzxAAC",
  },
  {
    id: "a1f25000003Bs0BAAS",
  },
  {
    id: "a1f25000003Bs0HAAS",
  },
  {
    id: "a1f25000003Bs0IAAS",
  },
  {
    id: "a1f25000003Bs0nAAC",
  },
  {
    id: "a1f25000003Bs0QAAS",
  },
  {
    id: "a1f25000003Bs0RAAS",
  },
  {
    id: "a1f25000003Bs0WAAS",
  },
  {
    id: "a1f25000003Bs0ZAAS",
  },
  {
    id: "a1f25000003Bs1dAAC",
  },
  {
    id: "a1f25000003Bs1EAAS",
  },
  {
    id: "a1f25000003Bs1FAAS",
  },
  {
    id: "a1f25000003Bs1HAAS",
  },
  {
    id: "a1f25000003Bs1IAAS",
  },
  {
    id: "a1f25000003Bs1KAAS",
  },
  {
    id: "a1f25000003Bs1YAAS",
  },
  {
    id: "a1f25000003BsaoAAC",
  },
  {
    id: "a1f25000003BsayAAC",
  },
  {
    id: "a1f25000003BsazAAC",
  },
  {
    id: "a1f25000003Bsb3AAC",
  },
  {
    id: "a1f25000003Bsb5AAC",
  },
  {
    id: "a1f25000003Bsb6AAC",
  },
  {
    id: "a1f25000003Bsb7AAC",
  },
  {
    id: "a1f25000003Bsb8AAC",
  },
  {
    id: "a1f25000003BsbaAAC",
  },
  {
    id: "a1f25000003BsbGAAS",
  },
  {
    id: "a1f25000003BsbHAAS",
  },
  {
    id: "a1f25000003BsbiAAC",
  },
  {
    id: "a1f25000003BsbjAAC",
  },
  {
    id: "a1f25000003BsbKAAS",
  },
  {
    id: "a1f25000003BsbmAAC",
  },
  {
    id: "a1f25000003BsbnAAC",
  },
  {
    id: "a1f25000003BsbPAAS",
  },
  {
    id: "a1f25000003BsbQAAS",
  },
  {
    id: "a1f25000003BsbsAAC",
  },
  {
    id: "a1f25000003BsbuAAC",
  },
  {
    id: "a1f25000003BsbvAAC",
  },
  {
    id: "a1f25000003BsbwAAC",
  },
  {
    id: "a1f25000003BsbxAAC",
  },
  {
    id: "a1f25000003BsbXAAS",
  },
  {
    id: "a1f25000003BsbyAAC",
  },
  {
    id: "a1f25000003Bsc1AAC",
  },
  {
    id: "a1f25000003Bsc3AAC",
  },
  {
    id: "a1f25000003Bsc4AAC",
  },
  {
    id: "a1f25000003Bsc7AAC",
  },
  {
    id: "a1f25000003Bsc9AAC",
  },
  {
    id: "a1f25000003BscBAAS",
  },
  {
    id: "a1f25000003BscCAAS",
  },
  {
    id: "a1f25000003BscLAAS",
  },
  {
    id: "a1f25000003BsMTAA0",
  },
  {
    id: "a1f25000003BsMVAA0",
  },
  {
    id: "a1f25000003BsNbAAK",
  },
  {
    id: "a1f25000003BsNdAAK",
  },
  {
    id: "a1f25000003BsNeAAK",
  },
  {
    id: "a1f25000003BsNhAAK",
  },
  {
    id: "a1f25000003BsNjAAK",
  },
  {
    id: "a1f25000003BsNkAAK",
  },
  {
    id: "a1f25000003BsNMAA0",
  },
  {
    id: "a1f25000003BsNmAAK",
  },
  {
    id: "a1f25000003BsNNAA0",
  },
  {
    id: "a1f25000003BsNoAAK",
  },
  {
    id: "a1f25000003BsNQAA0",
  },
  {
    id: "a1f25000003BsNqAAK",
  },
  {
    id: "a1f25000003BsNRAA0",
  },
  {
    id: "a1f25000003BsNrAAK",
  },
  {
    id: "a1f25000003BsNsAAK",
  },
  {
    id: "a1f25000003BsNTAA0",
  },
  {
    id: "a1f25000003BsNUAA0",
  },
  {
    id: "a1f25000003BsNuAAK",
  },
  {
    id: "a1f25000003BsNWAA0",
  },
  {
    id: "a1f25000003BsNXAA0",
  },
  {
    id: "a1f25000003BsNyAAK",
  },
  {
    id: "a1f25000003BsNzAAK",
  },
  {
    id: "a1f25000003BsO4AAK",
  },
  {
    id: "a1f25000003BsO6AAK",
  },
  {
    id: "a1f25000003BsOAAA0",
  },
  {
    id: "a1f25000003BsOaAAK",
  },
  {
    id: "a1f25000003BsOBAA0",
  },
  {
    id: "a1f25000003BsOcAAK",
  },
  {
    id: "a1f25000003BsOdAAK",
  },
  {
    id: "a1f25000003BsOEAA0",
  },
  {
    id: "a1f25000003BsOeAAK",
  },
  {
    id: "a1f25000003BsOfAAK",
  },
  {
    id: "a1f25000003BsOgAAK",
  },
  {
    id: "a1f25000003BsOhAAK",
  },
  {
    id: "a1f25000003BsOIAA0",
  },
  {
    id: "a1f25000003BsOkAAK",
  },
  {
    id: "a1f25000003BsOlAAK",
  },
  {
    id: "a1f25000003BsOmAAK",
  },
  {
    id: "a1f25000003BsONAA0",
  },
  {
    id: "a1f25000003BsOnAAK",
  },
  {
    id: "a1f25000003BsOoAAK",
  },
  {
    id: "a1f25000003BsOPAA0",
  },
  {
    id: "a1f25000003BsOSAA0",
  },
  {
    id: "a1f25000003BsOsAAK",
  },
  {
    id: "a1f25000003BsOtAAK",
  },
  {
    id: "a1f25000003BsOUAA0",
  },
  {
    id: "a1f25000003BsOvAAK",
  },
  {
    id: "a1f25000003BsOYAA0",
  },
  {
    id: "a1f25000003BsOyAAK",
  },
  {
    id: "a1f25000003BsP1AAK",
  },
  {
    id: "a1f25000003BsP2AAK",
  },
  {
    id: "a1f25000003BsP6AAK",
  },
  {
    id: "a1f25000003BsP7AAK",
  },
  {
    id: "a1f25000003BsP9AAK",
  },
  {
    id: "a1f25000003BsPCAA0",
  },
  {
    id: "a1f25000003BsPcAAK",
  },
  {
    id: "a1f25000003BsPEAA0",
  },
  {
    id: "a1f25000003BsPeAAK",
  },
  {
    id: "a1f25000003BsPFAA0",
  },
  {
    id: "a1f25000003BsPfAAK",
  },
  {
    id: "a1f25000003BsPjAAK",
  },
  {
    id: "a1f25000003BsPkAAK",
  },
  {
    id: "a1f25000003BsPlAAK",
  },
  {
    id: "a1f25000003BsPnAAK",
  },
  {
    id: "a1f25000003BsPqAAK",
  },
  {
    id: "a1f25000003BsPwAAK",
  },
  {
    id: "a1f25000003BsPXAA0",
  },
  {
    id: "a1f25000003BsPxAAK",
  },
  {
    id: "a1f25000003BsPYAA0",
  },
  {
    id: "a1f25000003BsQ0AAK",
  },
  {
    id: "a1f25000003BsQ1AAK",
  },
  {
    id: "a1f25000003BsQ2AAK",
  },
  {
    id: "a1f25000003BsQ3AAK",
  },
  {
    id: "a1f25000003BsQ4AAK",
  },
  {
    id: "a1f25000003BsQ6AAK",
  },
  {
    id: "a1f25000003BsQ7AAK",
  },
  {
    id: "a1f25000003BsQ8AAK",
  },
  {
    id: "a1f25000003BsQDAA0",
  },
  {
    id: "a1f25000003BsQeAAK",
  },
  {
    id: "a1f25000003BsQFAA0",
  },
  {
    id: "a1f25000003BsQgAAK",
  },
  {
    id: "a1f25000003BsQHAA0",
  },
  {
    id: "a1f25000003BsQIAA0",
  },
  {
    id: "a1f25000003BsQJAA0",
  },
  {
    id: "a1f25000003BsQLAA0",
  },
  {
    id: "a1f25000003BsQNAA0",
  },
  {
    id: "a1f25000003BsQOAA0",
  },
  {
    id: "a1f25000003BsQqAAK",
  },
  {
    id: "a1f25000003BsQRAA0",
  },
  {
    id: "a1f25000003BsQsAAK",
  },
  {
    id: "a1f25000003BsQtAAK",
  },
  {
    id: "a1f25000003BsQVAA0",
  },
  {
    id: "a1f25000003BsQXAA0",
  },
  {
    id: "a1f25000003BsQZAA0",
  },
  {
    id: "a1f25000003BsQzAAK",
  },
  {
    id: "a1f25000003BsR0AAK",
  },
  {
    id: "a1f25000003BsR3AAK",
  },
  {
    id: "a1f25000003BsR4AAK",
  },
  {
    id: "a1f25000003BsR8AAK",
  },
  {
    id: "a1f25000003BsR9AAK",
  },
  {
    id: "a1f25000003BsRAAA0",
  },
  {
    id: "a1f25000003BsRBAA0",
  },
  {
    id: "a1f25000003BsRbAAK",
  },
  {
    id: "a1f25000003BsRCAA0",
  },
  {
    id: "a1f25000003BsRdAAK",
  },
  {
    id: "a1f25000003BsRFAA0",
  },
  {
    id: "a1f25000003BsRfAAK",
  },
  {
    id: "a1f25000003BsRGAA0",
  },
  {
    id: "a1f25000003BsRgAAK",
  },
  {
    id: "a1f25000003BsRHAA0",
  },
  {
    id: "a1f25000003BsRhAAK",
  },
  {
    id: "a1f25000003BsRIAA0",
  },
  {
    id: "a1f25000003BsRJAA0",
  },
  {
    id: "a1f25000003BsRjAAK",
  },
  {
    id: "a1f25000003BsRKAA0",
  },
  {
    id: "a1f25000003BsRkAAK",
  },
  {
    id: "a1f25000003BsRlAAK",
  },
  {
    id: "a1f25000003BsRMAA0",
  },
  {
    id: "a1f25000003BsRNAA0",
  },
  {
    id: "a1f25000003BsRPAA0",
  },
  {
    id: "a1f25000003BsRpAAK",
  },
  {
    id: "a1f25000003BsRQAA0",
  },
  {
    id: "a1f25000003BsRqAAK",
  },
  {
    id: "a1f25000003BsRRAA0",
  },
  {
    id: "a1f25000003BsRsAAK",
  },
  {
    id: "a1f25000003BsRtAAK",
  },
  {
    id: "a1f25000003BsRwAAK",
  },
  {
    id: "a1f25000003BsRXAA0",
  },
  {
    id: "a1f25000003BsRxAAK",
  },
  {
    id: "a1f25000003BsRYAA0",
  },
  {
    id: "a1f25000003BsRZAA0",
  },
  {
    id: "a1f25000003BsRzAAK",
  },
  {
    id: "a1f25000003BsS3AAK",
  },
  {
    id: "a1f25000003BsS6AAK",
  },
  {
    id: "a1f25000003BsS9AAK",
  },
  {
    id: "a1f25000003BsSAAA0",
  },
  {
    id: "a1f25000003BsSbAAK",
  },
  {
    id: "a1f25000003BsSCAA0",
  },
  {
    id: "a1f25000003BsScAAK",
  },
  {
    id: "a1f25000003BsSEAA0",
  },
  {
    id: "a1f25000003BsSfAAK",
  },
  {
    id: "a1f25000003BsSGAA0",
  },
  {
    id: "a1f25000003BsShAAK",
  },
  {
    id: "a1f25000003BsSiAAK",
  },
  {
    id: "a1f25000003BsSJAA0",
  },
  {
    id: "a1f25000003BsSjAAK",
  },
  {
    id: "a1f25000003BsSKAA0",
  },
  {
    id: "a1f25000003BsSLAA0",
  },
  {
    id: "a1f25000003BsSmAAK",
  },
  {
    id: "a1f25000003BsSPAA0",
  },
  {
    id: "a1f25000003BsSQAA0",
  },
  {
    id: "a1f25000003BsSrAAK",
  },
  {
    id: "a1f25000003BsSTAA0",
  },
  {
    id: "a1f25000003BsSUAA0",
  },
  {
    id: "a1f25000003BsSuAAK",
  },
  {
    id: "a1f25000003BsSVAA0",
  },
  {
    id: "a1f25000003BsSWAA0",
  },
  {
    id: "a1f25000003BsSYAA0",
  },
  {
    id: "a1f25000003BsSzAAK",
  },
  {
    id: "a1f25000003BsT2AAK",
  },
  {
    id: "a1f25000003BsT3AAK",
  },
  {
    id: "a1f25000003BsT4AAK",
  },
  {
    id: "a1f25000003BsT7AAK",
  },
  {
    id: "a1f25000003BsT9AAK",
  },
  {
    id: "a1f25000003BsTAAA0",
  },
  {
    id: "a1f25000003BsTaAAK",
  },
  {
    id: "a1f25000003BsTCAA0",
  },
  {
    id: "a1f25000003BsTfAAK",
  },
  {
    id: "a1f25000003BsThAAK",
  },
  {
    id: "a1f25000003BsTJAA0",
  },
  {
    id: "a1f25000003BsTjAAK",
  },
  {
    id: "a1f25000003BsTLAA0",
  },
  {
    id: "a1f25000003BsTmAAK",
  },
  {
    id: "a1f25000003BsTOAA0",
  },
  {
    id: "a1f25000003BsToAAK",
  },
  {
    id: "a1f25000003BsTQAA0",
  },
  {
    id: "a1f25000003BsTTAA0",
  },
  {
    id: "a1f25000003BsTUAA0",
  },
  {
    id: "a1f25000003BsTuAAK",
  },
  {
    id: "a1f25000003BsTVAA0",
  },
  {
    id: "a1f25000003BsTWAA0",
  },
  {
    id: "a1f25000003BsTyAAK",
  },
  {
    id: "a1f25000003BsTZAA0",
  },
  {
    id: "a1f25000003BsTzAAK",
  },
  {
    id: "a1f25000003BsU0AAK",
  },
  {
    id: "a1f25000003BsU1AAK",
  },
  {
    id: "a1f25000003BsU4AAK",
  },
  {
    id: "a1f25000003BsU8AAK",
  },
  {
    id: "a1f25000003BsU9AAK",
  },
  {
    id: "a1f25000003BsUBAA0",
  },
  {
    id: "a1f25000003BsUcAAK",
  },
  {
    id: "a1f25000003BsUDAA0",
  },
  {
    id: "a1f25000003BsUfAAK",
  },
  {
    id: "a1f25000003BsUgAAK",
  },
  {
    id: "a1f25000003BsUHAA0",
  },
  {
    id: "a1f25000003BsUhAAK",
  },
  {
    id: "a1f25000003BsUKAA0",
  },
  {
    id: "a1f25000003BsUMAA0",
  },
  {
    id: "a1f25000003BsUmAAK",
  },
  {
    id: "a1f25000003BsUNAA0",
  },
  {
    id: "a1f25000003BsUOAA0",
  },
  {
    id: "a1f25000003BsUoAAK",
  },
  {
    id: "a1f25000003BsUpAAK",
  },
  {
    id: "a1f25000003BsUqAAK",
  },
  {
    id: "a1f25000003BsUSAA0",
  },
  {
    id: "a1f25000003BsUTAA0",
  },
  {
    id: "a1f25000003BsUtAAK",
  },
  {
    id: "a1f25000003BsUuAAK",
  },
  {
    id: "a1f25000003BsUWAA0",
  },
  {
    id: "a1f25000003BsVaAAK",
  },
  {
    id: "a1f25000003BsVdAAK",
  },
  {
    id: "a1f25000003BsVeAAK",
  },
  {
    id: "a1f25000003BsVfAAK",
  },
  {
    id: "a1f25000003BsVgAAK",
  },
  {
    id: "a1f25000003BsVmAAK",
  },
  {
    id: "a1f25000003BsVPAA0",
  },
  {
    id: "a1f25000003BsVQAA0",
  },
  {
    id: "a1f25000003BsVRAA0",
  },
  {
    id: "a1f25000003BsVSAA0",
  },
  {
    id: "a1f25000003BsVtAAK",
  },
  {
    id: "a1f25000003BsVUAA0",
  },
  {
    id: "a1f25000003BsVVAA0",
  },
  {
    id: "a1f25000003BsVWAA0",
  },
  {
    id: "a1f25000003BsVwAAK",
  },
  {
    id: "a1f25000003BsVxAAK",
  },
  {
    id: "a1f25000003BsVyAAK",
  },
  {
    id: "a1f25000003BsVzAAK",
  },
  {
    id: "a1f25000003BsW3AAK",
  },
  {
    id: "a1f25000003BsW4AAK",
  },
  {
    id: "a1f25000003BsW6AAK",
  },
  {
    id: "a1f25000003BsW8AAK",
  },
  {
    id: "a1f25000003BsWAAA0",
  },
  {
    id: "a1f25000003BsWBAA0",
  },
  {
    id: "a1f25000003BsWCAA0",
  },
  {
    id: "a1f25000003BsWEAA0",
  },
  {
    id: "a1f25000003BsWGAA0",
  },
  {
    id: "a1f25000003BsWIAA0",
  },
  {
    id: "a1f25000003BsWiAAK",
  },
  {
    id: "a1f25000003BsWLAA0",
  },
  {
    id: "a1f25000003BsWMAA0",
  },
  {
    id: "a1f25000003BsWNAA0",
  },
  {
    id: "a1f25000003BsWrAAK",
  },
  {
    id: "a1f25000003BsWSAA0",
  },
  {
    id: "a1f25000003BsWsAAK",
  },
  {
    id: "a1f25000003BsWUAA0",
  },
  {
    id: "a1f25000003BsX1AAK",
  },
  {
    id: "a1f25000003BsXaAAK",
  },
  {
    id: "a1f25000003BsXCAA0",
  },
  {
    id: "a1f25000003BsXcAAK",
  },
  {
    id: "a1f25000003BsXDAA0",
  },
  {
    id: "a1f25000003BsXdAAK",
  },
  {
    id: "a1f25000003BsXnAAK",
  },
  {
    id: "a1f25000003BsXOAA0",
  },
  {
    id: "a1f25000003BsXpAAK",
  },
  {
    id: "a1f25000003BsXQAA0",
  },
  {
    id: "a1f25000003BsXrAAK",
  },
  {
    id: "a1f25000003BsXSAA0",
  },
  {
    id: "a1f25000003BsXTAA0",
  },
  {
    id: "a1f25000003BsXtAAK",
  },
  {
    id: "a1f25000003BsXuAAK",
  },
  {
    id: "a1f25000003BsXvAAK",
  },
  {
    id: "a1f25000003BsXWAA0",
  },
  {
    id: "a1f25000003BsXxAAK",
  },
  {
    id: "a1f25000003BsXYAA0",
  },
  {
    id: "a1f25000003BsXyAAK",
  },
  {
    id: "a1f25000003BsXZAA0",
  },
  {
    id: "a1f25000003BsY0AAK",
  },
  {
    id: "a1f25000003BsY1AAK",
  },
  {
    id: "a1f25000003BsY3AAK",
  },
  {
    id: "a1f25000003BsY4AAK",
  },
  {
    id: "a1f25000003BsY6AAK",
  },
  {
    id: "a1f25000003BsYAAA0",
  },
  {
    id: "a1f25000003BsYcAAK",
  },
  {
    id: "a1f25000003BsYDAA0",
  },
  {
    id: "a1f25000003BsYdAAK",
  },
  {
    id: "a1f25000003BsYeAAK",
  },
  {
    id: "a1f25000003BsYFAA0",
  },
  {
    id: "a1f25000003BsYfAAK",
  },
  {
    id: "a1f25000003BsYHAA0",
  },
  {
    id: "a1f25000003BsYhAAK",
  },
  {
    id: "a1f25000003BsYIAA0",
  },
  {
    id: "a1f25000003BsYJAA0",
  },
  {
    id: "a1f25000003BsYKAA0",
  },
  {
    id: "a1f25000003BsYkAAK",
  },
  {
    id: "a1f25000003BsYLAA0",
  },
  {
    id: "a1f25000003BsYlAAK",
  },
  {
    id: "a1f25000003BsYMAA0",
  },
  {
    id: "a1f25000003BsYPAA0",
  },
  {
    id: "a1f25000003BsYpAAK",
  },
  {
    id: "a1f25000003BsYQAA0",
  },
  {
    id: "a1f25000003BsYRAA0",
  },
  {
    id: "a1f25000003BsYtAAK",
  },
  {
    id: "a1f25000003BsYWAA0",
  },
  {
    id: "a1f25000003BsYYAA0",
  },
  {
    id: "a1f25000003BsYyAAK",
  },
  {
    id: "a1f25000003BsYzAAK",
  },
  {
    id: "a1f25000003BsZ0AAK",
  },
  {
    id: "a1f25000003BsZ1AAK",
  },
  {
    id: "a1f25000003BsZ3AAK",
  },
  {
    id: "a1f25000003BsZ5AAK",
  },
  {
    id: "a1f25000003BsZaAAK",
  },
  {
    id: "a1f25000003BsZbAAK",
  },
  {
    id: "a1f25000003BsZcAAK",
  },
  {
    id: "a1f25000003BsZeAAK",
  },
  {
    id: "a1f25000003BsZgAAK",
  },
  {
    id: "a1f25000003BsZiAAK",
  },
  {
    id: "a1f25000003BsZlAAK",
  },
  {
    id: "a1f25000003BsZmAAK",
  },
  {
    id: "a1f25000003BsZpAAK",
  },
  {
    id: "a1f25000003BsZrAAK",
  },
  {
    id: "a1f25000003BsZtAAK",
  },
  {
    id: "a1f25000003BsZWAA0",
  },
  {
    id: "a1f25000003BsZZAA0",
  },
];

let currentProduct = 1;
let err = [];
const concurentRequestMaker = async (details, body) => {
  const payload = {
    ...body,
    variables: {
      pricingCodes: ["Group-001", "__LEGACY_PRICING__"],
    },
  };
  console.info("Parallel Fetching for the below PRODUCTS IDS");
  const requests = details.map(async (url) => {
    console.info(url.productId);
    const res = await fetch(url.url, {
      method: "POST",
      headers: {
        "org-id": "00D250000009OrS",
        "Content-Type": "application/json",
        "User-Agent": "ANYTHING_WILL_WORK_HERE",
      },
      body: JSON.stringify({
        ...payload,
        variables: {
          ...payload.variables,
          productIds: [url.productId],
        },
      }),
    });
    const data = await res.json();
    return data;
  });

  console.time(
    `Response time for 10 parallel requests for the products ${currentProduct}-${
      currentProduct + 10
    }`
  );
  try {
    const response = await Promise.all(requests);
    console.log(
      `Response for ${currentProduct}-${currentProduct + 10} products`
    );
    const out = [];
    for (const i of response) {
      out.push(i);
    }
    console.info(out);
    const errors = out.filter((out) => out.errors);
    if (errors.length === 0) {
      console.info("All Requests are passed with no errors");
    } else {
      console.error("Errrr :(", errors);
      err.push({ errors: [...errors.map((data) => data.errors)] });
    }

    console.timeEnd(
      `Response time for 10 parallel requests for the products ${currentProduct}-${
        currentProduct + 10
      }`
    );
  } catch (e) {
    console.error(e);
  }
};

const url = "https://cs-staging-test-api.cloudsense.com/graphql";
(async function () {
  for (let i = 1; i < productIds.length; i += 10) {
    const payload = productIds
      .slice(i - 1, currentProduct + 10)
      .map((product) => ({
        url,
        productId: product.id,
      }));

    await concurentRequestMaker(payload, {
      query: PRODUCTS_GRAPHQL,
    });

    if (err.length > 0) {
      writeFile("./error.json", JSON.stringify(err));
    }
    currentProduct += 10;
  }
})();

// const singleRequest = async (body) => {
//   let hasMore = true;
//   let after = null;
//   try {
//     while (hasMore) {
//       const payload = {
//         ...body,
//         variables: {
//           catalogueId: "a6U1s00000096K1EAI",
//           pricingCodes: ["LISTPRICE"],
//           page: {
//             after,
//             limit: 1,
//           },
//         },
//       };
//       const response = await fetch(url, {
//         method: "POST",
//         headers: {
//           "org-id": "00D1s0000000dnU",
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(payload),
//       });
//       if (response.status === 200) {
//         const productsInCatalogue = (await response.json()).data
//           .productsInCatalogue;
//         console.log(response.status);
//         hasMore = productsInCatalogue.hasMore;
//         after =
//           productsInCatalogue.nextPage && productsInCatalogue.nextPage.after;
//         console.log(after);
//       } else {
//         hasMore = false;
//         after = null;
//         console.error("Error with response code " + response.status);
//         console.error(response.statusText);
//       }
//     }
//     console.info("DONE");
//   } catch (e) {
//     console.log(e, "error");
//   }
// };

// // singleRequest({
// //   query: PRODUCTS_IN_CATALOGUE_GRAPHQL,
// // });

// const req = ["a1f25000003BcEYAA0", "a1f25000003BcEYAA0"].map((data) =>
//   fetch("https://cs-staging-test-api.cloudsense.com/graphql", {
//     method: "POST",
//     headers: {
//       "org-id": "00D250000009OrS",
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       ...{
//         query: PRODUCTS_GRAPHQL,
//       },
//       variables: {
//         pricingCodes: ["Group-001", "__LEGACY_PRICING__"],
//         productIds: [data],
//       },
//     }),
//   })
//     .then((data) => {
//       return data.json();
//     })
//     .then((data) => {
//       throw "erreor";
//     })
// );

// Promise.all(req)
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((e) => {
//     console.log(e);
//   });
