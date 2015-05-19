//
//  CircleView.m
//  CircleDemo
//
//  Created by YuanFeng on 15/4/22.
//  Copyright (c) 2015年 juandou. All rights reserved.
//

#import "CircleView.h"
#define PI 3.14159265358979323846

#define RGBA(r,g,b,a)   [UIColor colorWithRed:(r)/255.0f green:(g)/255.0f blue:(b)/255.0f alpha:a]

@implementation CircleView

-(instancetype)initWithFrame:(CGRect)frame{
    self = [super initWithFrame:frame];
    if (self) {
        [self setBackgroundColor:[UIColor clearColor]];
    }
    
    return self;
}

-(void)setProcess:(CGFloat)process{
    
}

-(void)drawRect:(CGRect)rect{
    
    CGContextRef context = UIGraphicsGetCurrentContext();
    
    //外圆圈
    
    UIColor*strokeColor = RGBA(237 , 237, 237, 1.0);
    UIColor*fillColor = RGBA(255 , 255, 255, 1.0);
    CGContextSetStrokeColorWithColor(context, strokeColor.CGColor);
    CGContextSetFillColorWithColor(context, fillColor.CGColor);
    CGContextSetLineWidth(context, 1.0);
    CGContextAddArc(context, CGRectGetMidX(rect), CGRectGetMidY(rect), rect.size.width/2-2, 0, 2*PI, 0);
    CGContextDrawPath(context, kCGPathFillStroke);
    
    //内园
    CGColorRef beginColor = RGBA(37,197,249,1.0).CGColor;
    CGColorRef endColor = RGBA(32, 105, 235, 1.0).CGColor;
    
    CGColorSpaceRef colorSpace = CGColorSpaceCreateDeviceRGB();
    CGFloat locations[] = {0.0,1.0};
    NSArray *colors = [NSArray arrayWithObjects:(__bridge id)beginColor,(__bridge id)endColor, nil];
    CGGradientRef gradient = CGGradientCreateWithColors(colorSpace, (CFArrayRef)CFBridgingRetain(colors), locations);
    CGPoint startPoint = CGPointMake(CGRectGetMidX(rect), CGRectGetMinY(rect));
    CGPoint endPoint = CGPointMake(CGRectGetMidX(rect), CGRectGetMaxY(rect));
    CGContextSaveGState(context);
    CGContextAddArc(context, CGRectGetMidX(rect), CGRectGetMidY(rect), rect.size.width/2-8, 0, 2*PI, 0);
    CGContextClip(context);
    CGContextDrawLinearGradient(context, gradient, startPoint, endPoint, 0);
    
    CGContextRestoreGState(context);
    CGGradientRelease(gradient);
    CGColorSpaceRelease(colorSpace);
    
}

@end
