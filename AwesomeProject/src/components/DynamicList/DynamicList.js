import React, { Component } from 'react';
import { Container, Header, Button, Content, List, ListItem, Left, Right, Text, View } from 'native-base';

export default class DynamicList extends Component {


    render() {
        var items = ['Simon Mignolet', 'Nathaniel Clyne', 'Nathaniel Clyne', 'Nathaniel Clyne', 'Nathaniel Clyne', 'Nathaniel Clyne', 'Nathaniel Clyne', 'Dejan Lovren', 'Mama Sakho', 'Emre Can'];

        return (

            <Container >
                <Content >
                    <List

                        dataArray={items}
                        renderRow={(item) =>
                            <ListItem onPress={this.props.action}>
                                <Left>

                                    <Text>{item}</Text>
                                </Left>
                                <Right>
                                    <Button rounded small style={{ backgroundColor: 'black' }} r>
                                        <Text>Light</Text>
                                    </Button>

                                </Right>

                            </ListItem>
                        }>
                    </List>
                </Content>
            </Container>
        );
    }
}
