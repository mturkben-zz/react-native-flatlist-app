import React , {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  Image,
    
} from 'react-native';


import data from "../database/data";

const ListComponent = () => {
    
    const [contacts,setContacts] = useState(data);
    const [text,setText] = useState("");
    
    const renderContactsItem = ({item,index}) => {
        return (
			<TouchableOpacity style={[styles.itemContainer, {backgroundColor: index % 2 === 1 ? '#F5F9E9' : '#C2C1A5'}]}>
				<Image
					style={styles.avatar}
					source={{uri: item.picture}}/>
				<View style={styles.textContainer}>
					<Text style={styles.name}>{item.name}</Text>
					<Text>{item.company}</Text>
				</View>
			</TouchableOpacity>
		)
    } 

    const searchFilter = text => {
        const newData = data.filter(item => {
            const listItem = `${item.name.toLowerCase()} ${item.company.toLowerCase()}`;

            return  listItem.indexOf(text.toLowerCase()) > -1;
        })
        setContacts(newData);
    }

    const renderheader = () =>  {
        return (
			<View style={styles.searchContainer}>
				<TextInput
					onChangeText={val =>{setText(val);searchFilter(val);}}
					value={text}
					placeholder="Search..."
					style={styles.searchInput}/>
			</View>
		)
    }

  return (
     <FlatList
        ListHeaderComponent={renderheader()}
        renderItem={renderContactsItem}
        keyExtractor={item => item._id}
        data={contacts}/>
  );
};

const styles = StyleSheet.create({
	itemContainer: {
		flex: 1,
		flexDirection: 'row',
		paddingVertical: 10,
		borderBottomWidth: 1,
		borderBottomColor: '#000'
	},
	avatar: {
		width: 50,
		height: 50,
		borderRadius: 25,
		marginHorizontal: 10
	},
	textContainer: {
		justifyContent: 'space-around'
	},
	name: {
		fontSize: 16
	},
	searchContainer: {
		padding: 10
	},
	searchInput: {
		fontSize: 16,
		backgroundColor: '#f3f3f3',
		padding: 10
	}
});

export default ListComponent;
