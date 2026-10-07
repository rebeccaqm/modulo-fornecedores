const supabase = require('../config/database')


const getFornecedores = async (req, res) => {
    try {
        const {data, error} = await supabase.from("fornecedores").select("*");

        if (error) {
            return res.status(400).json({mensagem: error.message})
        }

        return res.status(200).json(data)

    } catch (error) {
        return res.status(500).json({mensagem: error.message});
        
    }

}


const store = async (req, res) => {
    const { nome, cnpj, email, telefone } = req.body

    if (!nome || !cnpj) {
        return res.status(400).json({error: "Os campos 'nome'e 'cnpj' são obrigatórios"})
    }

    try {
        const { data, error } = await supabase.from('fornecedores').insert([{ nome, cnpj, email, telefone }]).select();
        
        if (error) return res.status(400).json({error: error.message});

        return res.status(201).json(data);

    } catch (error) {
        return res.status(500).json({error: error.message});
        
    }

}


const getById = async (req, res) => {
  const { id } = req.params;

  try {
    const { data, error } = await supabase.from('fornecedores').select('*').eq('id', id).single(); // .single() garante o retorno de um único objeto em vez de uma lista

    if (error || !data) {
      return res.status(404).json({ error: 'Fornecedor não encontrado.' });
    }

    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ error: 'Erro interno no servidor.' });
  }
};


module.exports ={ 
    getFornecedores,
    store,
    getById
}
