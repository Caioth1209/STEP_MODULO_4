<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>AULA 14</title>
<link
	href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.2/dist/css/bootstrap.min.css"
	rel="stylesheet"
	integrity="sha384-uWxY/CJNBR+1zjPWmfnSnVxwRheevXITnMqoEIeG1LJrdI0GlVs/9cVSyPYXdcSF"
	crossorigin="anonymous">
<script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
</head>
<body>

	<form id="formularioCadastro">
		<div class="mb-3">
			<label for="nome" class="form-label">Nome</label> 
			<input type="text" id="nomeCadastro" name="nome" class="form-control"
				maxlength="20" required>
		</div>

		<div class="mb-3">
			<label for="cpf" class="form-label">CPF</label> <input
				type="text" id="cpfCadastro" name="cpf" class="form-control"
				maxlength="14" required>
		</div>


		<input type="button" value="Cadastrar"
			  id="bt"
			class="btn btn-success" />
	</form>
	
<script	src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.2/dist/js/bootstrap.bundle.min.js"
integrity="sha384-kQtW33rZJAHjgefvhyyzcGF3C5TFyBQBA13V1RKPf4uH+bwyzQxZ6CmMZHmNBEfJ"
	crossorigin="anonymous"></script>
<script type="text/javascript" src="main.js"></script>
</body>
</html>