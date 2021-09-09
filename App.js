import React, {useState} from 'react';
import {StyleSheet, Switch, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
import Button from './src/components/Button';
import colors from './src/colors.js'
import sizes from './src/sizes.js'

const initialData = {
	limite: 0,
}

export default function App() {
	const [data, setData] = useState(initialData)

	function handleData(valor, nome){
		setData({...data, [nome]: valor})
	}

	function openAccount(){
		const length = objectLength(data)

		console.log(data);

		if(length === 5){
			Alert.alert(
				"Dados da conta",
				`
				Nome: ${data.nome}
				Idade: ${data.idade}
				Genero: ${data.genero}
				Limite: R$ ${data.limite.toFixed(2)}
				Conta Estudante: ${data.estudante ? 'Ativo' : 'Inativo'}
				`,
			)
		}else{
			Alert.alert(
				'Erro',
				'Preencha os dados corretamente',
			)
		}
	}

	function resetData(){
		setData(initialData)
	}

	function objectLength(obj){
		let length= 0;  
		for (var i in obj) {
			if (obj.hasOwnProperty(i)) {
				length++;
			}
		}

		return length
	}

	return (
		<View style={styles.container}>

			<View style={styles.form}>
				<View style={{alignItems: 'center', justifyContent: 'center', textAlign: 'center', width: '100%', marginBottom: 30}}>
					<Text style={[styles.label, styles.textCenter, styles.bold, styles.title]}>{'Cadastro do banco'}</Text>
				</View>

				<View>
					<Text style={styles.label}>{'Nome:'}</Text>
					<TextInput
						style={styles.input} 
						onChangeText={val => handleData(val, 'nome')}
						value={data.nome}
					/>
				</View>

				<View>
					<Text style={styles.label}>{'Idade'}</Text>
					<TextInput
						style={styles.input} 
						onChangeText={val => handleData(val, 'idade')} 
						value={data.idade}
						keyboardType='numeric'
					/>
				</View>

				<View>
					<Text style={styles.label}>{'Genero'}</Text>
					<View style={styles.input}>
						<Picker
							onValueChange={val => handleData(val, 'genero')}
							selectedValue={data.genero}
						>
							<Picker.Item label={'Feminino'} value={'Feminino'} />
							<Picker.Item label={'Masculino'} value={'Masculino'} />
						</Picker>
					</View>
				</View>

				<View>
					<Text style={styles.label}>Seu Limite:</Text>
					<Text style={styles.label}>{`R$ ${data.limite.toFixed(2)}`} </Text>
					<Slider 
						onValueChange={val => handleData(val, 'limite')} 
						value={data.limite}
						minimumValue={0}
						maximumValue={1000}
					/>
				</View>

				<View style={{alignItems: 'flex-start'}}>
					<Text style={styles.label}>{'Estudante'}</Text>
					<Switch
						onValueChange={val => handleData(val, 'estudante')} 
						value={data.estudante}
					/>
				</View>

				<Button bgColor={colors.btn1} onClick={openAccount} label={'Abrir conta'} />
				<Button bgColor={colors.btn2} onClick={resetData} label={'Resetar'} />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	textCenter: {
		textAlign: 'center',
	},
	bold: {
		fontWeight: 'bold'
	},

	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: colors.white,
		justifyContent: 'flex-start',
	},
	form: {
		width: '100%',
		paddingHorizontal: 30,
		marginTop: 60
	},
	label: {
		color: colors.dark,
		textAlign: 'left',
		width: '100%',
		marginBottom: 5,
		fontSize: sizes.label,
		fontWeight: 'bold'
	},
	input: {
		backgroundColor: colors.gray,
		borderRadius: 4,
		borderColor: colors.gray2,
		borderWidth: 1,
		marginBottom: 5,
		minHeight: 40,
		paddingHorizontal: 5
	},
	btn: {
		width: '100%',
		borderRadius: 20,
		textAlign: 'center',
	},

	title: {
		fontSize: sizes.title
	}
});
