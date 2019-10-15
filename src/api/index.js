import BaseService from './BaseService'
import API from './apiList'

class Service extends BaseService {
  API = API
}

const serviceInstance = new Service()

export default serviceInstance
