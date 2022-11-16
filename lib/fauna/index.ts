interface FaunaError {
  message: string,
}

interface ResponceError {
  success: false,
  response: FaunaError[]
}

interface ResponceSuccess<T> {
  success: true,
  response: T
}

const queryFauna = <T>(
    query: string,
    variables: Record<string, unknown>
  ): Promise<ResponceSuccess<T> | ResponceError> => fetch(
    'https://graphql.fauna.com/graphql',
    {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + Deno.env.get("FAUNA_SECRET"),
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        query,
        variables
      })
    }
  )
  .then(res => res.json())
  .then(res => res.errors === undefined ? {
      response: res.data,
      success: true
    } : {
      response: res.errors,
      success: false 
    }
  );

export default queryFauna;
