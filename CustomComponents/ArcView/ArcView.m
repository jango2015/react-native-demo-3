//
//  ArcView.m
//  CircleDemo
//
//  Created by YuanFeng on 15/4/23.
//  Copyright (c) 2015年 juandou. All rights reserved.
//

#import "ArcView.h"

#define PI 3.14159265358979323846

#define RGBA(r,g,b,a)   [UIColor colorWithRed:(r)/255.0f green:(g)/255.0f blue:(b)/255.0f alpha:a]
#define OrangeRedColor RGBA(250 , 111, 87, 1.0)

@interface ArcView()
@property (nonatomic, strong) UILabel* percentLabel;
@end

@implementation ArcView


-(instancetype)initWithFrame:(CGRect)frame{
    self = [super initWithFrame:frame];
    if (self) {
        self.backgroundColor = [UIColor clearColor];
        self.arcWidth = 6;
    }
    return self;
}

-(void)setProcess:(CGFloat)percent{
    _process = percent;
  [self setNeedsDisplay];
}

-(void)setArcWidth:(CGFloat)arcWidth{
    _arcWidth = arcWidth;
    [self setNeedsDisplay];
}

-(void)drawRect:(CGRect)rect{
    CGContextRef context = UIGraphicsGetCurrentContext();
    
    //底色，灰
    UIColor*strokeColor = RGBA(227 , 228, 232, 1.0);
    CGContextSetStrokeColorWithColor(context, strokeColor.CGColor);
    CGContextSetLineWidth(context, self.arcWidth);
    CGContextAddArc(context, CGRectGetMidX(rect), CGRectGetMidY(rect), rect.size.width/2-8, 0, 2*PI, 0);
    CGContextDrawPath(context, kCGPathStroke);
    
    //上色,橘红
    CGContextSetStrokeColorWithColor(context, OrangeRedColor.CGColor);
    CGContextSetLineWidth(context, self.arcWidth);
    CGContextSetLineCap(context, kCGLineCapRound);
    CGContextSetLineJoin(context, kCGLineJoinRound);
    CGContextAddArc(context, CGRectGetMidX(rect), CGRectGetMidY(rect), rect.size.width/2-8, 0-PI*0.5, PI*(2*_process-0.5), 0);
    CGContextDrawPath(context, kCGPathStroke);
}

@end
