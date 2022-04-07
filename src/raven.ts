import * as Config from './config';
import { DocumentStore, IDocumentStore } from 'ravendb';
console.log(Config.RAVEN_CERT);
const authOptions: any = {
	certificate: Config.RAVEN_CERT,
	type: 'pem',
};

const store: IDocumentStore = new DocumentStore([Config.RAVEN_SERVER_URL], Config.RAVEN_DB_NAME_PLATFORM, authOptions);
store.initialize();

export {
	store
}