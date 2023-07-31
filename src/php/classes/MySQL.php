<?php

class MySQL
{
    private $host = 'localhost';
    private $port = '3306';
    private $username = 'root';
    private $password = 'root';
    private $db_name = 'soft_market';
    private $conn;

    // Construtor que recebe as informações de conexão com o banco de dados
    public function __construct()
    {
        $this->connect();
    }

    // Função para estabelecer a conexão com o banco de dados
    public function connect()
    {
        try {
            // Cria a conexão PDO
            $dsn = "mysql:host=$this->host;port=$this->port;dbname=$this->db_name";
            $this->conn = new PDO($dsn, $this->username, $this->password);
        
            // Define o modo de erro do PDO para exceção
            $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        
            // Testa a conexão
            //echo json_encode("Conexão bem-sucedida com o banco de dados MySQL!");
        } catch (PDOException $e) {
            // Caso ocorra um erro na conexão
            echo json_encode("Erro na conexão com o banco de dados: " . $e->getMessage());
        }
    }

    // Função para executar uma consulta SELECT no banco de dados
    public function select($query)
    {
        try {
            $stmt = $this->conn->prepare($query);
            $stmt->execute();
            return $stmt->fetchAll();
        } catch (PDOException $e) {
            echo json_encode("Erro na consulta: " . $e->getMessage());
        }
    }

    // Função para executar uma operação de inserção (INSERT) no banco de dados
    public function insert($query)
    {
        try {
            $stmt = $this->conn->prepare($query);
            $stmt->execute();
            return true;
        } catch (PDOException $e) {
            echo json_encode("Erro na inserção: " . $e->getMessage());
        }
    }

    // Função para executar uma operação de exclusão (DELETE) no banco de dados
    public function delete($query)
    {
        try {
            $stmt = $this->conn->prepare($query);
            $stmt->execute();
            return true;
        } catch (PDOException $e) {
            echo json_encode("Erro na exclusão: " . $e->getMessage());
        }
    }

    // Função para executar uma operação de atualização (UPDATE) no banco de dados
    public function update($query)
    {
        try {
            $stmt = $this->conn->prepare($query);
            $stmt->execute();
            return true;
        } catch (PDOException $e) {
            echo json_encode("Erro na atualização: " . $e->getMessage());
        }
    }

    // Função para fechar a conexão com o banco de dados
    public function closeConnection()
    {
        $this->conn = null;
    }
}
?>
