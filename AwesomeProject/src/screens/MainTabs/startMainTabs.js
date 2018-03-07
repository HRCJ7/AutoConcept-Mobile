import {Navigation} from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

const startTabs =() => {
    
          Navigation.startTabBasedApp({

            tabs: [
                {
                    screen: "awesome-app.SharePlaceScreen",
                     label:"Share Place",
                    title: "Share Place",
                    icon:require('../../assets/one.png')
                },
                {
                    screen: "awesome-app.FindPlaceScreen",
                    label:"Find Place",
                    title: "Find Place",
                    icon:require('../../assets/one.png')
                }
        
            ]
        });

    // Promise.all([
    //     Icon.getImageSource("md-map",30),
    //     Icon.getImageSource("md-map",30)
    // ]).then(sources =>{

    //     Navigation.startTabBasedApp({

    //         tabs: [
    //             {
    //                 screen: "awesome-app.SharePlaceScreen",
    //                  label:"Share Place",
    //                 title: "Share Place",
    //                 icon:sources[0]
    //             },
    //             {
    //                 screen: "awesome-app.FindPlaceScreen",
    //                 label:"Find Place",
    //                 title: "Find Place",
    //                 icon:sources[1]
    //             }
        
    //         ]
    //     });

    // });


};
export default startTabs;
