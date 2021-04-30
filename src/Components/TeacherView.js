import { Grid } from '@material-ui/core'
import React from 'react'
import { TutoryRightBar } from './StudentViewCenter/TutoryRightBar'
import TeacherLeftView from './TeacherVew/TeacherLeftView'
import TeachingPlace from './TeacherVew/TeachingPlace'

export default function TeacherView() {
    const style = {
        paddingTop: "50px",
        height: '100vh'
    }
    return (
        <div style={style}>
            <Grid container>
                <Grid item xs={3}>
                    <a href="/">
                        <TeachingPlace />
                    </a>
                </Grid>
                <Grid item xs={5}>
                    <a href="/techview">
                        <h3>Tutory Update</h3>
                    </a>
                </Grid>
                <Grid item xs={4}>
                    <a href="/TeachToAdminChat">
                        <h3>Admin</h3>
                    </a>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item sm={3} >
                    <TeacherLeftView />
                </Grid>
                <Grid item sm={9}>
                    <TutoryRightBar />
                </Grid>
            </Grid>
        </div>
    )
}
