//
//  CircleShapeLayer.m
//  p2p
//
//  Created by tiangua on 15/5/11.
//  Copyright (c) 2015年 Facebook. All rights reserved.
//

#import "CircleShapeLayer.h"
#import <UIKit/UIKit.h>

#define PI 3.14159265358979323846

#define RGBA(r,g,b,a)   [UIColor colorWithRed:(r)/255.0f green:(g)/255.0f blue:(b)/255.0f alpha:a]


@interface CircleShapeLayer()
@property (nonatomic, strong) CAGradientLayer* backgroundLayer;

@end

@implementation CircleShapeLayer

- (instancetype)init
{
    self = [super init];
    if (self) {
      [self setupLayers];
    }
    return self;
}

-(void)setupLayers{
    self.backgroundLayer = [[CAGradientLayer alloc] init];
    self.backgroundLayer.frame = self.bounds;
    
    self.backgroundLayer.colors = @[(id)RGBA(37,197,249,1.0).CGColor,(id)RGBA(32, 105, 235, 1.0).CGColor];
    self.backgroundLayer.startPoint = CGPointMake(0.5, 0);
    self.backgroundLayer.endPoint = CGPointMake(0.5, 1);
    
    [self addSublayer:self.backgroundLayer];
}


@end
