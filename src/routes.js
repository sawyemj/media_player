import { Switch, Route } from 'react-router-dom'
import React from 'react'
import {HomePage, PhotoPage, VideoPage} from '../src/components'
import Gallery from '../src/containers/MediaGalleryPage'
const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route path='/videos' component={VideoPage}/>
            <Route path='/photos' component={PhotoPage}/>
            <Route path='/photos' component={PhotoPage}/>
            <Route path='/library' component={Gallery}/>
        </Switch>
    </main>
);

export default Main