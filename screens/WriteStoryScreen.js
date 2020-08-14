import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, TextInput} from 'react-native';
import { Header } from 'react-native-elements';
import db from '../config';

const TextInputBox = (props) => {
    return (
      <TextInput {...props} 
      editable
      maxLength={40}
      />
    );
  }

export default class WriteStoryScreen extends React.Component{
    constructor(){
        super();
        this.state={
            storyTitle: '',
            storyAuthor: '',
            storyContent: '',
            docCode: "2PRk27qHvZKanAmjsvvB"
        }
        console.log(this.state.docCode);
    }

    submitStory = async () => {
        db.collection("writtenBookDetails").doc(this.state.docCode).update({
            "authorName": this.state.author,
            "storyTitle": this.state.storyTitle,
            "story": this.state.storyContent
        });
    }

    render(){
        return(
            <View style={styles.container}>
                <Header
                    centerComponent={{
                        text: 'Story Hub',
                        style: { color: '#000000', fontSize: 30, fontWeight: "bold" },
                    }}
                />

                <View style={styles.inputView}>
                     <TextInput 
                        style={styles.inputBox} 
                        placeholder="Title of the story" 
                        onchangeText={text => this.setState({storyTitle: text})}
                        value={this.state.storyTitle}
                    />  
                </View>

                <View style={styles.inputView}>
                     <TextInput 
                        style={styles.inputBox} 
                        placeholder="Author of the story" 
                        onChangeText={text2 => this.setState({storyTitle: text2})}
                        value={this.state.storyAuthor}
                    />   
                </View>

                <View style={value3}>
                    <TextInputBox  
                        style={styles.inputBox2} 
                        multiline numberOfLines={10} 
                        placeholder="Write Story" 
                        onChangeText={text3 => this.setState({storyContent: text3})}
                        value={this.state.storyContent}
                    />
                </View>

                <View style={styles.container}>
                    <TouchableOpacity 
                        style={styles.button}
                        onPress={async () => {this.submitStory()}}
                    >
                        <Text style={styles.buttonText}>SUBMIT</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1, 
        justifyContent:'center',
        alignItems:'center'
    },
    inputView:{
        flexDirection:"row",
        margin:20
    },
    inputBox:{
        width:200,
        height:40,
        borderWidth:1.5,
        borderRightWidth:0,
        fontSize:20
    },
    inputBox2:{
        width:200,
        height:40,
        borderWidth:1.5,
        borderRightWidth:0,
        fontSize:20,
    },
    button:{
        backgroundColor:'#f6416c',
        width:200,
        height:50,
        alignItems:"center",
        alignSelf:"center"
    },
    buttonText:{
        fontSize:30,
        fontWeight:"bold"
    }
});