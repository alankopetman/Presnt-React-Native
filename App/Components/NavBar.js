import NavigationBar from 'react-native-navbar';
import React from 'react-native';
import { StyleSheet, View } from React;
import { Router, Route, Animations, Schema } from 'react-native-redux-router';

class NavBarBase extends React.Component {
   onPrev(){
       const Actions = this.props.routes;
       if (this.props.onPrev){
           this.props.onPrev();
           return;
       }
       if (this.props.navigator && this.props.navigator.getCurrentRoutes().length > 1){
           Actions.pop();
       }
   }
   render() {
       const Actions = this.props.routes;
       console.log("Props : " + this.props);
       return <NavigationBar style={styles.navBar}
								titleColor='white'
								buttonsColor='white'
								statusBar= {{style:'light-content', hidden: false}}
								title= {{title:this.props.title}}
								prevTitle={this.props.initial ? " " : null}
								leftButton = {this.props.leftButton ? this.props.leftButton : {title:''}}
								rightButton = {this.props.rightButton ? this.props.rightButton : {title:''}}
           />
   }
}

class NavBar extends React.Component {
   render() {
     const Actions = this.props.routes;
       return <NavBarBase customNext={<View/>} {...this.props} leftButton={{title:'Left', handler:this.props.onPrev || Actions.pop}}/>
   }
}


class NavBarModal extends React.Component {
   render() {
     const Actions = this.props.routes;
       return <NavBarBase customPrev={<View/>} nextTitle="Close" {...this.props} rightButton={{title:'Close', handler:this.props.onNext || Actions.pop}}/>
   }
}

const styles = StyleSheet.create({
   navBar: {
       backgroundColor: '#0db0d9'
   },
});
