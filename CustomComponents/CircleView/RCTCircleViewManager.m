//
//  RCTCircleViewManager.m
//  p2p
//
//  Created by tiangua on 15/5/11.
//  Copyright (c) 2015年 Facebook. All rights reserved.
//

#import "RCTCircleViewManager.h"
#import "CircleView.h"

@implementation RCTCircleViewManager
RCT_EXPORT_MODULE()

- (UIView *)view
{
  return [[CircleView alloc] initWithFrame:CGRectMake(0, 0, 200, 200)];
}



@end
