import { get,postForm,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}retailStoreOrderShipmentManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}retailStoreOrderShipmentManager/loadRetailStoreOrderShipment/${targetObjectId}/${parametersExpr}/`,
  })
}







const addRetailStoreOrder = (targetObjectId, parameters) => {
  const url = `${PREFIX}retailStoreOrderShipmentManager/addRetailStoreOrder/retailStoreOrderShipmentId/buyerId/sellerId/title/totalAmount/tokensExpr/`
  const retailStoreOrderShipmentId = targetObjectId
  const requestParameters = { ...parameters, retailStoreOrderShipmentId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const updateRetailStoreOrder = (targetObjectId, parameters) => {
  const url = `${PREFIX}retailStoreOrderShipmentManager/updateRetailStoreOrderProperties/retailStoreOrderShipmentId/id/title/totalAmount/tokensExpr/`
  const retailStoreOrderShipmentId = targetObjectId
  const requestParameters = { ...parameters, retailStoreOrderShipmentId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}

const removeRetailStoreOrderList = (targetObjectId, parameters) => {
  const url = `${PREFIX}retailStoreOrderShipmentManager/removeRetailStoreOrderList/retailStoreOrderShipmentId/retailStoreOrderIds/tokensExpr/`
  const requestParameters = { ...parameters, retailStoreOrderShipmentId: targetObjectId, tokensExpr: 'none' }
  return postForm({ url,requestParameters})
}


const RetailStoreOrderShipmentService = { view,
  load,
  addRetailStoreOrder,
  updateRetailStoreOrder,
  removeRetailStoreOrderList }
export default RetailStoreOrderShipmentService

