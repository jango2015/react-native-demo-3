//
//  ArcView.h
//  CircleDemo
//
//  Created by YuanFeng on 15/4/23.
//  Copyright (c) 2015年 juandou. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface ArcView : UIView
@property (nonatomic) CGFloat process;  //0-1
@property (nonatomic) CGFloat arcWidth; //弧度宽

-(instancetype)initWithFrame:(CGRect)frame;

@end
