//
//  RCTArcViewManager.m
//  p2p
//
//  Created by tiangua on 15/5/12.
//  Copyright (c) 2015年 Facebook. All rights reserved.
//

#import "RCTArcViewManager.h"
#import "ArcView.h"

@implementation RCTArcViewManager
RCT_EXPORT_MODULE();

-(UIView*)view{
    return [[ArcView alloc] init];
}

RCT_EXPORT_VIEW_PROPERTY(process, CGFloat);
RCT_EXPORT_VIEW_PROPERTY(arcWidth, CGFloat);
@end
