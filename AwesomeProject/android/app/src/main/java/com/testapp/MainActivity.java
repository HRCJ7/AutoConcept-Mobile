package com.testapp;

import android.graphics.Color;
import android.graphics.drawable.Drawable;
import android.os.Bundle;
import android.view.Gravity;
import android.widget.LinearLayout;
import android.widget.TextView;

import com.reactnativenavigation.controllers.SplashActivity;

import org.devio.rn.splashscreen.SplashScreen;

public class MainActivity extends SplashActivity {

    @Override
    public LinearLayout createSplashLayout() {
        LinearLayout view = new LinearLayout(this);
        view.setBackground(getResources().getDrawable(R.drawable.splash1));
        view.setGravity(Gravity.CENTER);

        return view;
    }
}
