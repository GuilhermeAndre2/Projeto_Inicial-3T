USE Projeto_escola;


INSERT INTO Usuarios(Nome, Email, Senha) 
VALUES				('Derlis', 'derlis@email.com', 'derlis123'),
					('Gabriel', 'gabriel@email.com', 'gabriel123'),
					('Gustavo', 'gustavo@email.com', 'gustavo123'),
					('Guilherme', 'guilherme@email.com', 'guilherme123')

INSERT INTO Sala(Andar, Nome, Metragem)
VALUES			('1º', 'Laboratorio', '60Metros')

INSERT INTO TipoEquipamentos(Nome)
VALUES			('Mobiliario'),
				('Informatica'),
				('EletroELetronico')

INSERT INTO Equipamentos(IdTipoEquipamento, IdSala, Situacao, Marca, NumeroSerie, NumeroPatrimonio, Descricao)
VALUES					(1, 1, 1, 'Samsung', '123456####', '1', 'Notebook Samsung, 1TB, 16GB RAM'),
						(1, 1, 1, 'Apple', '123457####', '2', 'MackBook Air, 2TB 4GB RAM I3 5º Geração')
	