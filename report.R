#!/usr/bin/env Rscript
phases = read.csv('results/phases.csv')
samples = read.csv('results/samples.csv')
gc = read.csv('results/gc.csv')

experiment = phases[phases$set == 'v2.12.0-beta3' & phases$phase == 'render' & phases$type == 'cumulative',]$ms
control = phases[phases$set == 'v2.11.1' & phases$phase == 'render' & phases$type == 'cumulative',]$ms

result = wilcox.test(experiment, control, conf.int=TRUE)

samples$type = factor(samples$type, levels=c('parseOnBackground','compile','run','callFunction','js','gc','duration'))

# by default string factors are ordered alphabetically
phases$phase = factor(phases$phase,
    levels=c('load','boot','transition','render'),
    labels=c('Load','Boot','Transition','Render'))
phases$set = factor(phases$set,
  levels=c('v2.11.1', 'v2.12.0-beta3'))
library('ggplot2')

gc$type = factor(gc$type, levels=c('before', 'after'))

png(file='results/gc.png')
ggplot(aes(y = heap, x = set, fill = type), data = gc) +
  geom_violin(draw_quantiles = c(0.25, 0.5, 0.75)) +
  geom_point(pch = 21, position = position_jitterdodge(dodge.width=0.9, jitter.width=0.3)) +
  scale_y_continuous(labels = function (x) { format(structure(x, class="object_size"),"Mb")})
dev.off()

png(file='results/samples.png')
ggplot(aes(y = ms, x = type, color = set), data = samples) +
  geom_boxplot(outlier.size=0.5, outlier.shape=4)
dev.off()

png(file='results/phases.png', width=1024, height=768)
ggplot(aes(y = ms, x = phase, color = set), data = phases) +
  facet_grid(type ~ ., scales='free_y') +
  geom_boxplot(outlier.size=0.5, outlier.shape=4) +
  labs(title = "ember-addons.com v2.11.1 vs 2.12.0-beta3 chrome 59", color = "Set",
    x = paste0("estimated shift is ", result$estimate, ", confidence interval from ", result$conf.int[1], " to ", result$conf.int[2], " for ", attr(result$conf.int, "conf.level"),", p.value: ", result$p.value))
dev.off()
