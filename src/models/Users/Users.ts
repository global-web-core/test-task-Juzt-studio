import { Http } from "../../globals";
import { CONTROLLERS, CODE_ANSWER } from "../../globals/constants/constants";
import {IHttp, IUsers} from '../../typesAndInterfaces/interfaces';

const getAll = async (): Promise<IHttp.Get<IUsers.Db>> => await Http.get(CONTROLLERS.users);
const getByUsernameAndPassword = async (username: string, password: string): Promise<IHttp.Get<IUsers.Db>> => {
	// Сразу дам комментарий по поводу того, почему я так сделал. Я развернул данные с бэкенда с помощью json-server, и он, конечно, умеет делать только очень простые вещи. Поэтому приходится имитировать здесь с помощью фильтра то, что должен был бы сделать бэкенд. Но мы с вами понимаем, что это должно делаться на бэкенде.
	const request = await Http.get<IUsers.Db>(CONTROLLERS.users);
	if (request.code === CODE_ANSWER.ok) {
		const user = request.data?.find(user => user.username === username && user.password === password)
		request.data = user ? [user] : undefined;
	}
	return request;
}

export {
	getAll,
	getByUsernameAndPassword
}