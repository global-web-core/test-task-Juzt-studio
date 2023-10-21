import { Http } from "../../globals";
import { CODE_ANSWER, CONTROLLERS } from "../../globals/constants/constants";
import {IHttp, ICars} from '../../typesAndInterfaces/interfaces';

const getAll = async (): Promise<IHttp.Get<ICars.Db>> => await Http.get(CONTROLLERS.cars);
const getByIdCar = async (id: number): Promise<IHttp.Get<ICars.Db>> => { 
	// Сразу дам комментарий по поводу того, почему я так сделал. Я развернул данные с бэкенда с помощью json-server, и он, конечно, умеет делать только очень простые вещи. Поэтому приходится имитировать здесь с помощью фильтра то, что должен был бы сделать бэкенд. Но мы с вами понимаем, что это должно делаться на бэкенде.
	const request = await Http.get<ICars.Db>(CONTROLLERS.cars);
	if (request.code === CODE_ANSWER.ok) {
		const car = request.data?.filter(car => car.id === id)
		request.data = car?.length ? car : undefined;
		if (!car?.length) request.code = CODE_ANSWER.bad;
	}
	return request;
}

const add = async (data: ICars.Add) => await Http.add<ICars.Add, ICars.Db>(CONTROLLERS.cars, data);

export {
	getAll,
	getByIdCar,
	add,
}