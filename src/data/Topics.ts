import { useTranslation } from "next-i18next";
import { IExternalLink } from "../model/IExternalLink";
import { deepCopy } from "../tools/Helpers/Tools";
import { CachedRepository } from "../tools/Repository/CachedRepository";

export interface ITopic {
    id: string;
    title: string;
    links?: IExternalLink[];
    filter?: (item: any) => void,
    tags?: string[]
}

const data: ITopic[] = [
    {
        id: "eu",
        title: "topics.eu",
        links: [],
        tags: ["regional"]
    },
    {
        id: "russia",
        title: "topics.russia",
        links: [],
        tags: ["regional"]
    },
    {
        id: "belarus",
        title: "topics.belarus",
        links: [],
        tags: ["regional"]
    },
    {
        id: "state-transparency",
        title: "topics.stateTransparency",
        links: []
    },
    {
        id: "environment",
        title: "topics.environment",
        links: []
    },
    {
        id: "solidarity",
        title: "topics.solidarity",
        links: []
    },
    {
        id: "vaccination",
        title: "topics.vaccination",
        links: []
    },
    {
        id: "opensource",
        title: "topics.opensource",
        links: []
    },
    {
        id: "school_system",
        title: "topics.schoolSystem",
        links: []
    },
    {
        id: "cryptocurrencies",
        title: "topics.cryptocurrencies",
        links: []
    },
];

export class TopicsRepository extends CachedRepository<ITopic> {

    protected processItem = (item: ITopic) => {
        const {t} = useTranslation();

        const copy = deepCopy(item);

        if (copy.title) {
            copy.title = t(copy.title);
        }

        return copy;
    }

    protected fetchAll() {
        return data;
    }
}
