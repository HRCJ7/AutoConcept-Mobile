import React, { Component } from 'react';
import { Container, Header, Button, Content, List, ListItem, Left, Right, Text, View } from 'native-base';
import Panel from '../../components/Panel/Panel';

export default class ExpandableList extends Component {


    render() {
        var items = ['Simon Mignolet', 'Dejan Lovren', 'Nathaniel Clyne', 'Nathaniel Clyne', 'Nathaniel Clyne', 'Nathaniel Clyne', 'Nathaniel Clyne', 'Dejan Lovren', 'Mama Sakho', 'Emre Can'];

        return (

            <Container style={{ marginTop: '5%' }} >
                <Content >
                    <List

                        dataArray={items}
                        renderRow={(item) =>
                            <ListItem onPress={this.props.action} style={{ width: '90%' }}>
                                <Panel title="A Panel with short content text">
                                    <Text>{item}</Text>
                                </Panel>
                            </ListItem>
                        }>
                    </List>
                </Content>
            </Container>
        );
    }
}
