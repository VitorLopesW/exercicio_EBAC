
const alunos = []

function gerarAlunos() {
    const nomes = ['João', 'Maria', 'José', 'Ana', 'Carlos', 'Mariana', 'Pedro', 'Paula', 'Lucas', 'Juliana']
    for (let i = 0; i < 10; i++) {
        const aluno = {
            nome: nomes[i],
            nota: Math.floor(Math.random() * 10) + 1
        }
        alunos.push(aluno)
    }
}

gerarAlunos() 

function alunosAprovados(data, notaMinima) {
    const aprovados = data.reduce((acc, aluno) => {
        if (aluno.nota >= notaMinima) {
            acc.push(aluno)
        }
        return acc
    }, [])
    return aprovados
}

const arrayDeAprovados  = alunosAprovados(alunos, 6)

console.log(arrayDeAprovados)
