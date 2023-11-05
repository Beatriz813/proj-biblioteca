
export const Status = {
  Success: 'SUCCESS',
  Bussiness: 'BUSSINESS',
  System: 'SYSTEM'
}

export const BussinessError = (errorMessage) => {
  return {
    status: 'BUSSINESS',
    data: errorMessage
  }
}

export const SystemError = (errorMessage) => {
  return {
    status: 'SYSTEM',
    data: errorMessage
  }
}

export const Success = (dataSuc) => {
  return {
    status: 'SUCCESS',
     data: dataSuc
  }
}
