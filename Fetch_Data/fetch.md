# Fetch 

### Multiplos retornos 
Quando estamos fazendo uma busca de dados,
temos três possíbilidades, o carregamento quando estamos
aguardando a chegada dos dados pois temos que ter em mente
quando se trata de buscar dados, estaremos utilizando de um recurso assíncrono,
para que não aconteça instantaneamente. segunda possíbilidade,
pode haver um erro e por ultimo é o sucesso da requisição dos dados.

Sabendo disso, devemos preparar dois estados do tipo boolean para
serem os 'interruptores' de carregamento e erro do nosso JSX. Por convenção
utilizasse 'is' e depois o nome, mas nada te impedi de utilizar o que deseja.
```
const [isLoading, setIsLoading] = useState(true);
const [isError, setIsError] = useState(false);
```
Para utilizar eles em nossa lógica devemos ter em mente que,
se utilizarmos o carregamento depois do return do JSX, então não vai
fazer sentido pois o carregamento deve vir primeiro e como 
efetivamente o javascript lê nosso código de forma síncrona (sequencia ordenada) teremos um erro
em nossa lógica. Portanto, se você tiver retornado o JSX antes da condição de carregamento
que estamos prestes a criar, essencialmente, você estára exibindo
JSX o tempo todo e não é isso que queremos, logo, certifique-se de colocar
o carregamento em primeiro lugar.

```
if (isLoading) {
    return <h2>Loading...</h2>
  }

  if (isError) {
    return <h2>There was an error...</h2>
  }

  return (
    <div className="App">
      Lógica jsx....
    </div>
  )
}
```

Como o valor default do nosso estado 'IsLoading' é true, imediatamente atingieremos está condição,
portanto quando dermos refresh em nossa página teremos efetivamente  nosso ``` return <h2>Loading...</h2> ``` renderizado.

```
useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(url);
        const user = await response.json();
        setUser(user);

      } catch (error) {
        console.log(error);
        setIsError(true);
      }
      setIsLoading(false);
    }
    fetchUser();
  }, []);
```

Como estamos utilizando try catch para capturar os dados da API, temos duas possíbilidades, o sucesso da requisição ou a falha da mesma, se o try for sucesso então não precisaremos mais do estado de loading sendo renderizado, pois capturamos com sucesso os dados da requisição, portanto
em nossa lógica de fetch, dentro da função assíncrona, devemos mudar o valor do nosso estado de erro para false ```setIsLoading(false)``` . Caso o catch() seja acionado devamos mudar o valor do nosso estado de erro para que ele renderize o JSX que é contido dentro da sua lógica, assim informando ao usário o erro.






