import { IHttp } from '../../typesAndInterfaces/interfaces';
import { TBasic, TEntitiesDb } from '../../typesAndInterfaces/types';
import {API_URL, METHOD_HTTP} from '../constants/constants';
import axios from 'axios';

const fetchData = async <T extends TEntitiesDb.Objects>(url: string, options: IHttp.RequestOptions): Promise<IHttp.Get<T> | IHttp.Add<T>> => {
	try {
		const response = await axios({ url, ...options });
		return { code: 200, data: response.data };
	} catch (error) {
		console.log('Error fetch with server!!!', error);
		return { code: 404, data: undefined };
	}
}

const requestGet = async <T extends TEntitiesDb.Objects>(controller: TBasic.Controllers, method: typeof METHOD_HTTP["get"]): Promise<IHttp.Get<T>> => {
	const url = `${API_URL}/${controller}`;
	
	const options = {
		method,
		headers:{
			'Content-Type':'application/json'
		}
	};

	return fetchData(url, options) as Promise<IHttp.Get<T>>;
};

const requestAdd = async <T extends TEntitiesDb.Objects>(controller: TBasic.Controllers, method: typeof METHOD_HTTP["post"], data: TEntitiesDb.ObjectsAdd): Promise<IHttp.Add<T>> => {
	const url = `${API_URL}/${controller}`;
	
	const options: IHttp.RequestOptions = {
		method,
		headers:{
			'Content-Type':'application/json'
		},
		data: JSON.stringify(data)
	};

	return fetchData(url, options) as Promise<IHttp.Add<T>>;
};

const get = async <T extends TEntitiesDb.Objects>(controller: TBasic.Controllers): Promise<IHttp.Get<T>> => await requestGet(controller, METHOD_HTTP.get);
const add = async <T extends TEntitiesDb.ObjectsAdd, R extends TEntitiesDb.Objects>(controller: TBasic.Controllers, data: T): Promise<IHttp.Add<R>> => await requestAdd(controller, METHOD_HTTP.post, data);



export {
	get,
	add,
};