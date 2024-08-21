export function respData(data: any) {
  return resp(0, 'success', data || [])
}

export function respSuccess() {
  return resp(0, 'success')
}

export function respError(message: string) {
  return resp(-1, message)
}

export function resp(code: number, message: string, data?: any) {
  let json = {
    code: code,
    message: message,
    data: data
  }
  if (data) {
    json['data'] = data
  }
  return Response.json(json)
}
